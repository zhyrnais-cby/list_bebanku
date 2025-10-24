// Data Awal Pengguna
let userData = {
    name: "Pemain Baru",
    level: 1,
    coins: 0,
    points: 0,
    inventory: []
};

// Fungsi Navigasi (Menampilkan bagian yang berbeda)
function showSection(sectionId) {
    // Sembunyikan semua bagian
    document.querySelectorAll('.app-section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // Tampilkan bagian yang dipilih
    const targetSection = document.getElementById(sectionId + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
    }
}

// Fungsi untuk memperbarui tampilan informasi pengguna (Header & Profil)
function updateUI() {
    document.getElementById('profile-name').textContent = userData.name;
    document.getElementById('level').textContent = `Lv. ${userData.level}`;
    document.getElementById('coins').textContent = `💰 ${userData.coins}`;
    
    // Update profil
    const profilePointsElement = document.getElementById('profile-points');
    if (profilePointsElement) {
        profilePointsElement.textContent = userData.points;
    }
    const profileInventoryElement = document.getElementById('profile-inventory');
    if (profileInventoryElement) {
        profileInventoryElement.textContent = userData.inventory.length > 0 ? userData.inventory.join(', ') : 'Tidak ada';
    }
}

// Logika Permainan Sederhana (Contoh Kuis)
document.addEventListener('DOMContentLoaded', () => {
    updateUI(); // Muat data awal

    // Contoh: Logika Tombol Jawaban Kuis
    document.querySelectorAll('.answer-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const answer = e.target.getAttribute('data-answer');
            if (answer === 'air') {
                alert('🎉 Jawaban Benar! Anda mendapat 10 Poin dan 5 Koin.');
                userData.points += 10;
                userData.coins += 5;
                // Logika untuk naik level bisa ditambahkan di sini
            } else {
                alert('❌ Jawaban Salah. Coba lagi!');
            }
            updateUI(); // Perbarui tampilan setelah hadiah diberikan
            // Di sini Anda akan memuat pertanyaan berikutnya
        });
    });
    
    // Secara default tampilkan bagian 'game' saat pertama kali dimuat
    showSection('game');
});

/*
    *** PANDUAN PENGEMBANGAN FITUR LEBIH LANJUT ***

    1. Fitur Misi (missions):
       - Tambahkan data array untuk misi (misal: [{id: 1, desc: "Jawab 5 kuis", reward: 20, completed: false}])
       - Di 'script.js', buat fungsi untuk mengecek penyelesaian misi setelah setiap kuis.

    2. Fitur Toko (store):
       - Tambahkan data array untuk item toko (misal: [{id: 'avatar1', name: 'Avatar Atom', price: 100}])
       - Buat fungsi 'buyItem(itemId)' yang mengecek apakah userData.coins cukup, jika ya, kurangi koin dan tambahkan item ke userData.inventory.

    3. Fitur Peringkat (leaderboard):
       - Untuk aplikasi berbasis HTML/CSS/JS murni (tanpa server), peringkat akan terbatas pada data lokal.
       - Untuk peringkat nyata, Anda perlu server (backend) dan database (misal: Firebase, MySQL, dll) untuk menyimpan data banyak pengguna. Di versi sederhana, Anda bisa menampilkan peringkat dummy atau menyimpan data peringkat di Local Storage browser.

    4. Hadiah & Profil:
       - Sudah dicakup oleh variabel `userData` dan fungsi `updateUI()`. Pastikan setiap interaksi (kuis, misi) memicu pembaruan `userData` dan `updateUI()`.
*/

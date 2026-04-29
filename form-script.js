// form-script.js
// Simulasi database menggunakan Array
const dataAnggotaBaru = [];

const form = document.getElementById('registerForm');
const resultArea = document.getElementById('resultArea');
const resultText = document.getElementById('resultText');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman me-refresh saat submit

    // Tangkap data dari input
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const minat = document.getElementById('minat').value;

    // Simpan ke dalam array
    const memberBaru = { nama, email, minat };
    dataAnggotaBaru.push(memberBaru);

    // Tampilkan Alert
    alert(`Terima kasih ${nama}! Data Anda berhasil disimpan sementara.`);

    // Tampilkan di bagian bawah form
    resultArea.style.display = 'block';
    resultText.innerHTML = `
        <strong>Nama:</strong> ${nama} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Minat:</strong> ${minat} <br><br>
        <em>Total Pendaftar Tersimpan (Array): ${dataAnggotaBaru.length}</em>
    `;

    // Kosongkan form kembali
    form.reset();
});
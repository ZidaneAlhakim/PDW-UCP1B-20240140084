// script.js
const members = [
    { nama: "Budi Santoso", email: "budi@example.com", minat: "Web Development" },
    { nama: "Siti Aminah", email: "siti@example.com", minat: "Data Science" },
    { nama: "Andi Wijaya", email: "andi@example.com", minat: "Cyber Security" }
];

const tableBody = document.getElementById('tableBody');

members.forEach(member => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${member.nama}</td>
        <td>${member.email}</td>
        <td>${member.minat}</td>
    `;
    tableBody.appendChild(row);
});
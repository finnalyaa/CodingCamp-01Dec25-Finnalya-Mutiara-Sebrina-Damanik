// FITUR 1 : Greeting "Hi, Name!"
let userName = prompt("Masukkan Nama Anda:");
document.getElementById("welcomeText").innerText = `Hi ${userName}, Welcome To Website!`;


// FITUR 2 : Validasi + Tampilkan Output
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("msg").value;

    if (name === "" || email === "" || phone === "" || msg === "") {
        alert("Semua data harus diisi!");
        return;
    }

    document.getElementById("currentTime").innerText = "Current Time : " + new Date();
    document.getElementById("outputName").innerText = "Name : " + name;
    document.getElementById("outputEmail").innerText = "Email : " + email;
    document.getElementById("outputPhone").innerText = "Phone : " + phone;
    document.getElementById("outputMsg").innerText = "Message : " + msg;
});

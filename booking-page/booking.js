document.getElementById('btnBooking').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let errors = false;

    if (!name) {
        document.getElementById('nameError').innerText = "Nama harus diisi.";
        errors = true;
    }

    if (!email) {
        document.getElementById('emailError').innerText = "Email harus diisi.";
        errors = true;
    } else if (!email.includes('@')) {
        document.getElementById('emailError').innerText = "Email tidak valid. Pastikan ada '@' di dalamnya.";
        errors = true;
    }

    if (!phone) {
        document.getElementById('phoneError').innerText = "No. Handphone harus diisi.";
        errors = true;
    } else if (!phone.startsWith("08")) {
        document.getElementById('phoneError').innerText = "No. Handphone harus diawali dengan '08'.";
        errors = true;
    }

    if (!errors) {
        window.location.href = "../confirmation-page/confirm.html"; 
    }
});
document.getElementById('btnBooking').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Error messages
    let errors = false;

    // Validate name
    if (!name) {
        document.getElementById('nameError').innerText = "Nama harus diisi.";
        errors = true;
    }

    // Validate email
    if (!email) {
        document.getElementById('emailError').innerText = "Email harus diisi.";
        errors = true;
    } else if (!email.includes('@')) {
        document.getElementById('emailError').innerText = "Email tidak valid. Pastikan ada '@' di dalamnya.";
        errors = true;
    }

    // Validate phone number
    if (!phone) {
        document.getElementById('phoneError').innerText = "No. Handphone harus diisi.";
        errors = true;
    } else if (!phone.startsWith("08")) {
        document.getElementById('phoneError').innerText = "No. Handphone harus diawali dengan '08'.";
        errors = true;
    }

    // Redirect if no errors
    if (!errors) {
        window.location.href = "halaman_tujuan.html"; // Replace with your target page
    }
});
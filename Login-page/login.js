let btnLogin = document.getElementById('btn-login')

let userAccount = {
  email: "susi@gmail.com",
  password: "12345"
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
  
    let email = document.getElementById("email").value
    let password = document.getElementById('password').value
  
    if (email == userAccount.email && password == userAccount.password) {
        window.location.href =''
    } 
    else {
        document.getElementById('error-message').innerHTML = 'Alamat email atau password yang kamu masukkan salah.'
    }
  })
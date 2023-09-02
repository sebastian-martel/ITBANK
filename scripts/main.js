const useremail = document.getElementById('useremail')
const userpassword = document.getElementById('userpassword')
const boton = document.getElementById('boton')


function validateLogin() {
    const data = {
        useremail: useremail.value,
        userpassword: userpassword.value
    }
    if (data.useremail === "pepe" && data.userpassword === "123") {
        window.location.href = "cuentas.html"
    } else {
        alert("Usuario y/o contraseña incorrectos. (F12 para ver credenciales)")
        console.log("Usuario: pepe - Contraseña: 123");
    }
}
boton.addEventListener('click', (e) => {
    e.preventDefault()
    validateLogin()
})

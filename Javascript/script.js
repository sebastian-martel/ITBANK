const useremail = document.getElementById('useremail')
const userpassword = document.getElementById('userpassword')
const boton = document.getElementById('boton')


boton.addEventListener('click', (e) => { 
    e.preventDefault()
    const data = {
        useremail: useremail.value,
        userpassword: userpassword.value
    }
    console.log(data)
})
const dropDownMenuButton = document.querySelector(".dropDownMenu");
const navigationMenu = document.querySelector(".navigationMenu");
const facturasDetails = document.querySelector(".facturasDetails");
const facturaOptions = document.querySelectorAll(".facturaOption");
const facturaInfo = document.querySelectorAll(".facturaInfo");
const selectCuentas = document.getElementById("selectCuentas");
const pagaraDesde = document.querySelector(".cuentaSeleccionada");
const totalDisplay = document.querySelector(".total");
const eyeButtons = document.querySelectorAll(".eyeOpen")
const cuentaSelectPrestamos = document.getElementById("selectCuentas");
const importePrestamo = document.getElementById("importe");
const cuotasPrestamo = document.getElementById("cuotas");
const previewPrestamo = document.querySelector(".previewPrestamo");
const useremail = document.getElementById('useremail');
const userpassword = document.getElementById('userpassword');
const loginButton = document.getElementById('loginButton');

//login
/* function validateLogin() {
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
loginButton.addEventListener('click', (e) => {
  e.preventDefault()
  validateLogin()
}) */

//toggle para el nav
dropDownMenuButton.addEventListener("click", function () {
    navigationMenu.classList.toggle("hidden")
});

//Si ocultabas el menú en mobile y volvías tamaño completo, el nav desaparecía. esto lo fixea.
//Lo malo: hace muchos llamados a la función, pero en un proyecto pequeño no debería traer problemas.
function checkViewportWidth() {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth >= 840) { // valor de la MQ
        navigationMenu.classList.remove("hidden")
    }
}
checkViewportWidth();
window.addEventListener("resize", checkViewportWidth); //TO DO: investigar debouncer o throttler

//cuentas

eyeButtons.forEach(eyeButton => {
    eyeButton.addEventListener("click", hideCash);
});

function hideCash(event) {

    const eyeButton = event.target;
    const saldo = eyeButton.previousElementSibling;

    if (!eyeButton.src.includes("closed")) {
        eyeButton.src = "../assets/icons/eye-closed.svg";
        eyeButton.alt = "Mostrar Saldo"
        saldo.textContent = `Saldo: ***`;
      } else {
        eyeButton.src = "../assets/icons/eye.svg";
        saldo.textContent = `Saldo: $0`;
        eyeButton.alt = "Ocultar Saldo"
    }
}




//pagos
facturaOptions.forEach((facturaOption, index) => {
    //creo que era más eficiente era renderearlo dinámicamente desde un facturas.json pero no me da la cabeza ahora mismo 😴

    facturaOption.addEventListener("click", (e) => {
        e.stopPropagation();
        facturasDetails.classList.remove("hidden");

        let nombreFactura, precioFactura, fechaFactura, tipoFactura;
        //querySelectorAll genera un array de facturas
        //forEach itera sobre esas facturas, lo que nos permite utilizar su "index"
        switch (index) {
            case 0:
                nombreFactura = "Edesur";
                precioFactura = 10;
                fechaFactura = "17/8/2023";
                tipoFactura = "Electricidad";
                break;
            case 1:
                nombreFactura = "AYSA";
                precioFactura = 15;
                fechaFactura = "18/8/2023";
                tipoFactura = "Agua";
                break;
            case 2:
                nombreFactura = "Metrogas";
                precioFactura = 5;
                fechaFactura = "17/8/2023";
                tipoFactura = "Gas";
                break;
            case 3:
                nombreFactura = "Speedy";
                precioFactura = 7;
                fechaFactura = "15/8/2023";
                tipoFactura = "Internet";
                break;
            default:
                nombreFactura = "Factura Desconocida";
                precioFactura = 0;
                fechaFactura = "Sin fecha";
                tipoFactura = "Desconocido";
                break;
        }

        facturasDetails.innerHTML = `
      <dl>
        <div class="billName">
          <dt>Nombre de la empresa:</dt>
          <dd>${nombreFactura}</dd>
        </div>
        <div class="billDate">
          <dt>Fecha de vencimiento:</dt>
          <dd>${fechaFactura}</dd>
        </div>
        <div class="billType">
          <dt>Servicio declarado:</dt>
          <dd>${tipoFactura}</dd>
        </div>
        <div class="facturasPrice">
          <dt>Precio:</dt>
          <dd>$${precioFactura}</dd>
        </div>
      </dl>
    `;



        totalDisplay.innerHTML = totalPrecio
    });
});

let totalPrecio = 0;
let precioFactura = 0;
facturaOptions.forEach((checkbox, index) => {
    checkbox.addEventListener("change", (e) => {

        switch (index) {
            case 0:
                precioFactura = 10;
                break;
            case 1:
                precioFactura = 15;
                break;
            case 2:
                precioFactura = 5;
                break;
            case 3:
                precioFactura = 7;
                break;
            default:
                precioFactura = 0;
                break;
        }

        if (e.target.checked) {
            totalPrecio += precioFactura;
        } else {
            totalPrecio -= precioFactura;
        }

        totalDisplay.textContent = `$${totalPrecio}`;
    });
});

/* selectCuentas.addEventListener('change', function () {
    cuentaSeleccionada = selectCuentas.options[selectCuentas.selectedIndex];
    console.log(cuentaSeleccionada.innerText);
    pagaraDesde.innerHTML = cuentaSeleccionada.innerText;
}); */

//prestamos
importePrestamo.addEventListener('input', updatePrestamoPreview);
cuotasPrestamo.addEventListener('input', updatePrestamoPreview);

importePrestamo.addEventListener('input', prestamoLimit);
cuotasPrestamo.addEventListener('input', cuotasLimit);

function updatePrestamoPreview() {
    const importe = Number(importePrestamo.value);
    const cuotas = Number(cuotasPrestamo.value);

    let prestamoAPagar = importe;
    if (cuotas < 6) {
        prestamoAPagar *= 1.2;
    } else if (cuotas >= 6) {
        prestamoAPagar *= 2;
    } else if (cuotas >= 12) {
        prestamoAPagar *= 3;
    } else if (cuotas >= 24) {
        prestamoAPagar * 5
    }

    previewPrestamo.innerHTML = `Vas a pagar: $${Math.trunc(prestamoAPagar)}`;
}

function prestamoLimit() {
    const prestamoMaximo = 1000000;
    const prestamoSolicitado = Number(importePrestamo.value);

    if (prestamoSolicitado > prestamoMaximo) {
        importePrestamo.value = prestamoMaximo;
    }
}

function cuotasLimit() {
    const cuotasMaximo = 24;
    const cuotasSolicitado = Number(cuotasPrestamo.value);

    if (cuotasSolicitado > cuotasMaximo) {
        cuotasPrestamo.value = cuotasMaximo;
    }
}
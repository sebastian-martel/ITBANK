const cantidadInput = document.getElementById('cantidad');
const monedaInput = document.getElementById('monedas');
const resultado = document.getElementById('resultado');

let conversion;
let totalAConvertir;
let monedaAConvertir = "Real"; //por si el usuario convierte sin modificar el select

cantidadInput.addEventListener("change", ()=>{
totalAConvertir = cantidadInput.value
})

monedaInput.addEventListener("change", ()=>{
    monedaAConvertir = monedaInput.value
    })

    function convertir() {

        switch(monedaAConvertir) {
            case 'Real':
                conversion = totalAConvertir * 0.014;
                break;
            case 'Euro':
                conversion = totalAConvertir * 0.0026;
                break;
            case 'Dolar':
                conversion = totalAConvertir * 0.0028;
                break;
               default:
                conversion = "Ingrese una moneda a convertir" 
                
                break;
        }
        resultado.innerHTML = `${conversion.toFixed(2)} ${monedaInput.value}s`;
    }
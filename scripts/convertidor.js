const cantidadInput = document.getElementById('cantidad');
const monedaInput = document.getElementById('monedas');
const resultado = document.getElementById('resultado');

let conversion;
let totalAConvertir;
let monedaAConvertir;

cantidadInput.addEventListener("change", ()=>{
totalAConvertir = cantidadInput.value
})

monedaInput.addEventListener("change", ()=>{
    monedaAConvertir = monedaInput.value
    })

    function convertir() {

        switch(monedaAConvertir) {
            case 'Real':
                conversion = totalAConvertir * 1;
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
        resultado.innerHTML = `${conversion} ${monedaInput.value}s`;
    }
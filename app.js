const marca = prompt("Ingresa la marca del vehiculo");
const año   = prompt("Ingresa el año del vehiculo");
const valor = prompt("Ingrese valor del vehiculo");
console.log(marca, año, valor)

let operador;

operador = Number(prompt("Ingrese la Cobertura:\n1 -basica\n2 -MX intermedia\n3 -Todo riesgo C/F de $20.000"))

while(operador != 4){
    valir1 = 1600
    valor2 = 4000
    valor3 = 10000
    switch(operador){
        case 1:
            alert("La cobertura basica tiene un valor de "+ (valir1));
            break;
        case 2:
            alert("La cobertura MX tiene un valor de "+ (valir1 + valor2));
            break;
        case 3:
            alert("La cobertura T/R C/F de $20.000 tiene un valor de "+ (valir1 + valor3));
            break;
        default :
            alert("Valor incorrecto");
            break;       
    }
    operador = Number(prompt("Ingrese la Cobertura:\n1 -basica\n2 -MX intermedia\n3 -Todo riesgo C/F de $20.000\n4 -para salir"))
}

let Agregados = prompt("Ingresa las ampliaciones de tu cobertura basica o SALIR para terminar")
let contacto
let salida
 while (salida != "SALIR"){
     alert("El prod ingresado es " + Agregados)
     contacto = prompt("Ingrese un contacto y un asesor se comunicara a la breveda")
     alert("Gracias por su visita")
     salida = prompt("Ingrese SALIR para finalizar")
     console.log(contacto + Agregados)
    
}

let ControlDeProductos = [
    {nombre: "Cobertura1", precio: 1600},
    {nombre: "Cobertura2", precio: 4500},
    {nombre: "Cobertura3", precio: 11500},
    ];
let nombresControlDeProductos = [];

nombresControlDeProductos.push(ControlDeProductos.map(elemento => elemento.nombre));

console.log(nombresControlDeProductos);

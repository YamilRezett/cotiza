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
               
    }
    operador = Number(prompt("Ingrese la Cobertura:\n1 -basica\n2 -MX intermedia\n3 -Todo riesgo C/F de $20.000\n4 -para salir"))
}
 
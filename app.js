// let enviar = document.getElementById("enviar")
// let datos = document.getElementById("datos")
// let borrar = document.getElementById("borrar")

// datos.hidden = "none"

// enviar.addEventListener("click", () =>{
//     datos.hidden=""
//     let marca = document.querySelector("#marca").value 
//     let año = document.querySelector("#año").value
//     let valor =document.querySelector("#valor").value;

//     const content = document.createElement("div")

//     content.innerHTML =`
//     <h2>marca: ${marca}</h2>
//     <h2>año: ${año}</h2> 
//     <h2>valor: ${valor}</h2> 
//     `;
//     datos.append(content)
//           })

// borrar.addEventListener("click", () =>{
//     datos.innerHTML = ""
//     datos.hidden = "none"
// })

let producto = [
    { id: 1, name: "base", precio: 1600},
    { id: 2, name: "intermedio", precio: 4500},
    { id: 3, name: "completo", precio: 11500},
];

const guardar = (clave, valor) => { localStorage.setItem(clave, valor); };

for(const produc of producto){
    guardar(produc.id, JSON.stringify(produc));
}

localStorage.setItem("productos", JSON.stringify(producto));

const coberturas = document.querySelector(".coberturas");
const suggestionsPanel  = document.querySelector(".suggestions");

coberturas.addEventListener("keyup", ()=> {
    const input = coberturas.value

    const suggestions = producto.filter((producto)=>{
        return producto.precio.startsWith(input)
    })

suggestionsPanel.innerHTML= ""    

 suggestions.forEach((suggested) =>{
    const div = document.createElement("div");
    div.innerHTML = suggested.name
    suggestionsPanel.append(div);
 })
})

// const marca = prompt("Ingresa la marca del vehiculo");
// const año   = prompt("Ingresa el año del vehiculo");
// const valor = prompt("Ingrese valor del vehiculo");
// console.log(marca, año, valor)

// let operador;

// operador = Number(prompt("Ingrese la Cobertura:\n1 -basica\n2 -MX intermedia\n3 -Todo riesgo C/F de $20.000"))

// while(operador != 4){
//     valir1 = 1600
//     valor2 = 4000
//     valor3 = 10000
//     switch(operador){
//         case 1:
//             alert("La cobertura basica tiene un valor de "+ (valir1));
//             break;
//         case 2:
//             alert("La cobertura MX tiene un valor de "+ (valir1 + valor2));
//             break;
//         case 3:
//             alert("La cobertura T/R C/F de $20.000 tiene un valor de "+ (valir1 + valor3));
//             break;
//         default :
//             alert("Valor incorrecto");
//             break;       
//     }
//     operador = Number(prompt("Ingrese la Cobertura:\n1 -basica\n2 -MX intermedia\n3 -Todo riesgo C/F de $20.000\n4 -para salir"))
// }

// let Agregados = prompt("Ingresa las ampliaciones de tu cobertura basica o siguiente para pasar")
// let contacto
// let salida
//  while (salida != "SALIR"){
//      alert("El prod ingresado es " + Agregados)
//      contacto = prompt("Ingrese un contacto y un asesor se comunicara a la breveda")
//      alert("Gracias por su visita")
//      salida = prompt("Ingrese SALIR para finalizar")
//      console.log(contacto + Agregados)
    
// }

// let ControlDeProductos = [
//     {nombre: "Cobertura1", pre: 1600},
//     {nombre: "Cobertura2", pre: 4500},
//     {nombre: "Cobertura3", pre: 11500},
//     ];
// let nombresControlDeProductos = [];

// nombresControlDeProductos.push(ControlDeProductos.map(elemento => elemento.nombre));

// console.log(nombresControlDeProductos);

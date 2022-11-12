// const h1 = document.querySelector("h1");
// const input1 = document.querySelector("#calculo1");
// const input2 = document.querySelector("#calculo2");
// const btn = document.querySelector("#btncalcular");
// const btn1 = document.getElementById("btncalcular2");
// const pResults = document.querySelector("#results");
const h1 = document.querySelector("h1");
const form = document.querySelector('#form');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const btn1 = document.getElementById("btncalcular2");
const pResults = document.querySelector("#results");

// btn1.addEventListener('click', btnonclick);
form.addEventListener('submit', sumarInputValue);

// function btnonclick() {
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     //pResults.innerText = "El resultado es" + "   " + sumaInputs; 
//     pResults.innerText = ` El resultado es  ${sumaInputs}`;
// }
function sumarInputValue(event) {
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResults.innerText = ` El resultado es  ${sumaInputs}`;
}







// const p = document.querySelector("p");
// const parrafito = document.querySelector("parrafito");
// const pid = document.getElementById("pid");

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = "Patito <br> Feo";
// h1.innerText = "Patito <br> Feo"; // Para evitar algunos ataques, cuando se copia codigo de internet
// console.log(h1.getAttribute("class")); // Para traer un atributo del HTML
// h1.setAttribute("class", "Rojo"); // set permite modificar class de un HTML
// h1.classList.add("Amarillo");    // Para adicionar un atributo a una class
// h1.classList.remove("Rojo");    // Para adicionar un atributo a una class
// // input.value = "123456";
// // console.log(document.createElement('img')); // Permite imprimir un mensaje de un elemento creado en el documento
// const img =  document.createElement('img'); // 
// img.setAttribute('src', 'https://as01.epimg.net/meristation/imagenes/2022/06/21/noticias/1655790602_353948_1655790643_noticia_normal_recorte1.jpg');
// console.log(img);
// pid.innerHTML = "";
// console.log(pid);
// pid.appendChild(img);
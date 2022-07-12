const botton = document.getElementById("calc");
const mostrar = document.getElementById("show-result");
const add = document.getElementById("addNumber")

// llamada a la funcion calcular 

botton.addEventListener("click",calcular);
add.addEventListener("click",addNumber);


const numeros = [];

function addNumber () {
    const valores = parseFloat(document.getElementById("Prom-value").value);
    numeros.push(valores);
    console.log(numeros)
    
}


function calcular(){
    const resultado = numeros.reduce((n , a ) => n + a)/numeros.length;
    
    
    mostrar.innerHTML =resultado;
    

}
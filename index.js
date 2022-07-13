const botton = document.getElementById("calc");
const mostrar = document.getElementById("show-result");
const add = document.getElementById("addNumber");
const mostrarNumero = document.getElementById("show-numbers");
const limpiar = document.getElementById("clean");
// llamada a la funcion calcular 

botton.addEventListener("click",calcular);
add.addEventListener("click",addNumber);
limpiar.addEventListener("click",clear)


const numeros = [];

function addNumber () {
    const valores = parseFloat(document.getElementById("Prom-value").value);
    numeros.push(valores);

    mostrarNumero.innerHTML=numeros;

    console.log(numeros)
    
}


function calcular(){
    const resultado = numeros.reduce((n , a ) => n + a)/numeros.length;
    
    
    mostrar.innerHTML =resultado;
    

}

function clear(){

    mostrar.innerHTML = 00;
    numeros.pop()
    mostrarNumero.innerHTML = numeros;
    console.log(numeros);


}
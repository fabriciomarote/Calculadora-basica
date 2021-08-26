const botonNumeros = document.getElementsByName('data-number');
const botonOperaciones = document.getElementsByName('data-operation');
const botonIgual = document.getElementsByName('data-igual') [0];
const botonDelete = document.getElementsByName('data-delete') [0];
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;

botonNumeros.forEach(function(boton) {
    boton.addEventListener('click', function() {
        agregarNumero(boton.innerText);
    })
});

botonOperaciones.forEach(function(boton) {
    boton.addEventListener('click', function(){
        seleccionarOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function() {
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function() {
    clear();
    actualizarDisplay();
});

function agregarNumero(numero) {
   opeActual = opeActual.toString() + numero.toString();
   actualizarDisplay();
}

function seleccionarOperacion(opera) {
   if(opeActual === '') return;
   if(opeAnterior !== '') {
       calcular();
   }
   operacion = opera.toString();
   opeAnterior = opeActual;
   opeActual = '';
}

function calcular() {
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;         
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function actualizarDisplay() {
    result.value = opeActual;
}

function clear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}
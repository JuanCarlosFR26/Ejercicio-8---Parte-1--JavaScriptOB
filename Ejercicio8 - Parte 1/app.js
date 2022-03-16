function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if(num2 === 0) {
        return "No se puede dividir por cero"
    } else {
        return num1 / num2;
    }
}

console.log(suma(10,10))
console.log(resta(20,10))
console.log(multiplicacion(10,10))
console.log(division(10,0))
console.log(division(10,5))
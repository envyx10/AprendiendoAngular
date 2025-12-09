

// Definicion de funcion tradicional
// function addNumbers(): void

// void dice que explicitamente no hay un return en la funcion
function addNumbers(a: number,b: number): number {
    return a+b
}

// Al poner una constate delante typescript tambien infiera y 
// lo pone de tipo number dado que esta igualado a una funcion tipo number
const result: number = addNumbers(1,2)

console.log({result});


// Arrow function
const addNumbersArrow = (a: number,b: number)  => {
    return a + b
}

console.log({addNumbersArrow});


function multiply(
    firstNumber: number, 
    secondNumber?: number , 
    base: number = 2){

        return firstNumber * base
}

const multiplyResult: number = multiply(5)

console.log({
    multiplyResult
});



export {}
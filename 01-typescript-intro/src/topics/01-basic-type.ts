

// Si el valor siempre va a ser mismo le asignamos una const en vez de un let
const name: string = 'Strider';

const isAlive: boolean = true;

// Con el uso de la tuberia puedo hacer que una variable 
// sea de tipo numerico o string, boolean... etc
let hpPoints: number | string = 95

// hacemos log para verlo en formato objeto en la consola de google
// Como dato, si no importamos al main el archivo 01-basic-type.ts este no se verá, debemos importar primero el modulo
console.table(
    {
        name, 
        hpPoints,
        isAlive
    }
);


hpPoints = 'FULL';


export {} // Al hacer el export lo convertimos en un módulo
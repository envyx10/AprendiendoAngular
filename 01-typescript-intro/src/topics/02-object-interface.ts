

// En arrays para definir los tipos en typescript va seguido de [] 
const skills: string[] = ['Bash', 'Counter', 'Healing'];


// Interface creada para tipar el objeto literal de abajo '' strider ''
// Simplemente hay que llamar a esta interface donde nuestro objeto literal, de esta forma lo tipamos

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

// Objeto literal de JS
// Dentro de este objeto literal no podemos especificar el tipado y como podemos comprobar
// hay varios tipos. Para solucionar esto tenemos las interfaces, 
// donde podemos especificar el tipado de las clases.

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

console.table({
    skills,
    strider
});







export{} // Al hacer el export lo convertimos en un módulo
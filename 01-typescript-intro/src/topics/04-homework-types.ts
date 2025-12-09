/*
    ===== Código de TypeScript =====
*/

// Es buena practica y se debe hacer el terminar con ; las propiedades y no con ,
interface SuperHeroSinInterfazAddress{
    name: string;
    age: number;
    // Cuando se trabaja con interfaces donde dentro se define otro objeto
    // Se aconseja que dicho objeto se haga otra interfaz
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    showAddress(): string; // Asi lo he sacado yo 
    //showAddress: () => string; // Tambien se puede hacer asi, en el curso lo hace asi
}

///////////////////////////////////////////

// Generamos la interfaz del objeto Address
// Con F2 podemos cambiar el nombre de la propiedad
interface Address{
    street: string;
    country: string;
    city: string;
};

// Interfaz donde se ha creado otra interfaz para el objeto address
interface SuperHero{
    name: string;
    age: number;
    address: Address;
    // showAddress(): string; // Asi lo he sacado yo 
    showAddress: () => string; // Tambien se puede hacer asi, en el curso lo hace asi
}

// Como tip, cuando no sabemos algun tipo en especifico, antes de tipar y hacer la interfaz, si tenemos el cursor encima del objeto
// Este nos da pistas, por ejemplo, yo no sabia de que tipo poner showAddress y al final es showAddress(): string;
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    // Aqui hacemos que mediante un metodo usemos this para referinos a las propiedades de arriba
    // Esto es buena practica y escalabe, mucho mejor que poner superHeroe.name ya que nunca sabemos si este nombre se va a cambiar
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.table( {address} );


export {};


class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
console.log(`Nombre en la instanca1 es ${ instancia1.nombre }`)
console.log(`Nombre en la instanca2 es ${ instancia2.nombre }`)
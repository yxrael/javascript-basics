

class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

  

    nombre ='';
    codigo ='';
    frase ='';
    comida = ''

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${ this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

const spiderman = new Persona( 'Peter Parker', 'Spider', 'Soy tu amigo');
const ironman = new Persona( 'Tony', 'Ironman', 'Yo soy Ironman');


console.log({ironman});

// ironman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'Arroz con gambas';
// console.log({spiderman});
// console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log( Persona.conteo )

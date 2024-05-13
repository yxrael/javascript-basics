
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

class Heroe extends Persona {

    // nombre;
    // codigo;
    clan = 'sin clan';

    constructor( nombre, codigo, frase ) {
        super( nombre, codigo, frase);
        this.clan = 'Avengers'
    }
}

const spiderman = new Heroe ( 'Peter Parker', 'Spider', 'Soy tu amigo');
// const ironman = new Persona( 'Tony', 'Ironman', 'Yo soy Ironman');
console.log(spiderman)
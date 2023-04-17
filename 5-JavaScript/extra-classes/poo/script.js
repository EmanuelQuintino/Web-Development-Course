class Mamifero {
    constructor() {
        this.nascer()
    }

    nascer() {
        console.log('Nasceu!');
        this.tomarLeite()
    }

    tomarLeite() {
        console.log(`Tomou leite!`);
    }
}

class Terrestre extends Mamifero {
    constructor() {
        super()
    }

    locomocao() {
        console.log('andar');
    }
}

class Felino extends Terrestre {
    constructor() {
        super()
    }

    locomocao() {
        console.log(`Andar e Correr`);
    }
}

const mamifero = new Mamifero()
// mamifero.tomarLeite()

const macaco = new Terrestre()
// macaco.locomocao()

const leao = new Felino()
leao.locomocao()
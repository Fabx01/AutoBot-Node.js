// Description: Bot class
// classe Bot pode ser exportada para ser usada em outros arquivos

class Bot {
    constructor() {
        this._name = 'Optimus Prime';
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    sayHello() {
        console.log(`Hello, I am ${this.name}`);
    }
}

module.exports = { Bot };
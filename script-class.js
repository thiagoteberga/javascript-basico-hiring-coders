// ############################
// Classes
// ############################

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`;
    }
}

let book = new Book('Algoritimos para viver','James',500);

let otherBook = new Book('Um Exu em Nova York','Cidinha da Silva',100);

console.log(book.read());
console.log(otherBook.read());

console.log(book, otherBook);

//###################
// Herança
//###################

class ITBook extends Book {
    constructor(title, author, pages, technology){
        super(title,author,pages);
        this.technology = technology;
    }
}

let itBook = new ITBook('Um Exu em Nova York','Cidinha da Silva',100,'Algoritmos');

console.log(itBook);

console.log(itBook.technology);


//###################
// ENCAPSULAMENTO
//###################

class Person {
    constructor(name) {
        this._name = name; // Underline eh como se fosse privada
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value; //Permitir setar um outro valor
    }

}

let person = new Person('Teberga');

console.log(person.name);

person.name = 'Thiago';

console.log(person.name);
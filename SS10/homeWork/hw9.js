"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    get title9() {
        return this.title;
    }
    get author9() {
        return this.author;
    }
}
//kho sách
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    checkBook() {
        this.books.forEach((e, i) => {
            console.log(`#${i + 1} - ${e.title9} - ${e.author9}`);
        });
    }
}
let book1 = new Book("Raise of Kingdom", "Dương");
let book2 = new Book("Arena of Valor", "Gảena");
let book3 = new Book("The lord of the Rings", "unknown");
let book4 = new Book("Harry Porter", "Dương");
let book5 = new Book("Ô Long Viện", "Tung Cua");
let library = new Library();
// đẩy sách vào kho
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.checkBook();

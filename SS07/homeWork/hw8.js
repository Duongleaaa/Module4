"use strict";
//lớp đối tượng book
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    printBook() {
        console.log(this);
    }
    updateBook(newTitle, newAuthor, newPrice) {
        this.title = newTitle;
        this.author = newAuthor;
        this.price = newPrice;
    }
}
// Khởi tạo đối tượng book
let book = new Book('Last day on Earth', 'Kefir', 'free');
book.printBook();
console.log('Phiên bản hiện tại:');
book.printBook();
console.log('Sau khi cập nhật:');
book.updateBook('Last day on Earth', 'Kefir', '$98000');
book.printBook();

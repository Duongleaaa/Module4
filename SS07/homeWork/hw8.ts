//lớp đối tượng book
class Book {
    title: string;
    author: string;
    price: string;
  
    constructor(title: string, author: string, price: string) {
      this.title = title;
      this.author = author;
      this.price = price;
    }
  
    printBook() {
      console.log(this);
    }
  
    updateBook(newTitle: string, newAuthor: string, newPrice: string) {
      this.title = newTitle;
      this.author = newAuthor;
      this.price = newPrice;
    }
  }
  
  // Khởi tạo đối tượng book
  let book: Book = new Book('Last day on Earth', 'Kefir', 'free');
  book.printBook();
  
  console.log('Phiên bản hiện tại:');
  book.printBook();
  
  console.log('Sau khi cập nhật:');
  book.updateBook('Last day on Earth', 'Kefir', '$98000');
  book.printBook();
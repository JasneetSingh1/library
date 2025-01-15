const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read.toLowerCase();

    this.info = function(){
        let result = '';
        if(this.read == 'yes'){
            return result = `${this.title} by ${this.author}, ${pages} pages, read it`;
        }else{
            return result = `${this.title} by ${this.author}, ${pages} pages, not read yet`;
        }
    }
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


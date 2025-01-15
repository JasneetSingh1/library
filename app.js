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

function displayLibrary(myLibrary){
    const parentDiv = document.querySelector('.library');

    for(const book of myLibrary){
        let card = document.createElement("div");
        let title  = document.createElement("h2");
        title.textContent = `${book.title}`;
        let author = document.createElement("h3");
        author.textContent = `By: ${book.author}`;
        let pages = document.createElement("h4");
        pages.textContent = `Pages: ${book.pages}`;
        let read = document.createElement("h4");
        read.textContent = `Status: ${book.read}`;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        parentDiv.appendChild(card);
    }
}


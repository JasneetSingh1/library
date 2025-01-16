const myLibrary = [];
const addBookButton = document.querySelector('.create-books-button');
const dialog = document.querySelector('dialog');
const submitForm = document.querySelector('form');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read

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

    while(parentDiv.firstChild){
        parentDiv.removeChild(parentDiv.lastChild);
    }

    for(let i = 0; i < myLibrary.length; i++){
        console.log(i)
        let card = document.createElement("div");
        card.classList.add("card");

        let title  = document.createElement("h2");
        title.textContent = `${myLibrary[i].title}`;

        let author = document.createElement("h3");
        author.textContent = `By: ${myLibrary[i].author}`;

        let pages = document.createElement("p");
        pages.textContent = `Pages: ${myLibrary[i].pages}`;

        let read = document.createElement("p");
        read.textContent = `Status: ${myLibrary[i].read}`;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        parentDiv.appendChild(card);
    }
}


addBookButton.addEventListener('click',() => {
    dialog.showModal();
} )

submitForm.addEventListener('submit', function(e){
    e.preventDefault();
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    
    if(document.querySelector("#read").checked){
        let read = document.querySelector('#read');
        addBookToLibrary(title.value, author.value, pages.value, read.value);
        dialog.close();
        submitForm.reset();
    }
    else {
        let read = document.querySelector('#not-read');
        addBookToLibrary(title.value, author.value, pages.value, read.value);
        dialog.close();
        submitForm.reset();
    }

    
    console.log(myLibrary)
    displayLibrary(myLibrary)
    
})


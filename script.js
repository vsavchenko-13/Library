const table = document.querySelector(".table");
const newBook = document.querySelector(".newBook");
newBook.addEventListener("click", requestInfo)
const buttonArea = document.querySelector(".buttonArea");
const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    addBookToLibrary(this);
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function showOnPage(book){
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var values = [book.title, book.author, book.pages, book.read];
    for (let i = 0; i < values.length; i++){
        var td = document.createElement("td");
        td.textContent = values[i];
        tr.appendChild(td);
    }
}

function requestInfo(){
    var form = document.createElement("form");
    buttonArea.appendChild(form);
    
    var values = ["title", "author", "pages", "read"];
    for (let i = 0; i< values.length; i++){
        var input = document.createElement("input");
        input.placeholder = values[i];
        input.classList.add(values[i]);
        form.appendChild(input);
    }
    
    var button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add New Book";
    form.appendChild(button);

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        var title = document.querySelector(".title");
        var author = document.querySelector(".author");
        var pages = document.querySelector(".pages");
        var read = document.querySelector(".read");
        addNewBook(title.value, author.value, pages.value, read.value);
    } )
}

function addNewBook(title, author, pages, read){
    var newName = title;
    newName = new Book(title, author, pages, read);
    console.log(myLibrary);
    showBooks();
}

const Dune = new Book ("Dune", "Frank Herbert", "412", "not read");
const bladeRunner = new Book ("Blade Runner", "Phillip K. Dick", "210", "was read")

//console.log(myLibrary)

function showBooks(){
    for (let i = 0; i < myLibrary.length;i++){
        showOnPage(myLibrary[i]);
    }
}



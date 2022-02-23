const libraryContainer = document.getElementById('library-container');
const addBookBtn = document.getElementById('add-btn');
const modal = document.getElementById('add-modal');
const span = document.getElementsByClassName("close")[0];
let myLibrary = [];


const myBook = new Book('Gospel According to Jesus', 'John Macarthur', '500');
addBookBtn.addEventListener("click", checkLib);
span.addEventListener("click", closeModal);

function checkLib() {
    modal.style.display = "block";
    // addBook(myBook);
    // console.log(myLibrary);
    // displayBook(); 
    // console.log(libraryContainer.children);
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBook(book) {
    myLibrary.push(book);
}

function displayBook() {
    for (let book of myLibrary) {
        book = document.createElement("div");
        book.classList.add("book");
        libraryContainer.appendChild(book).classList.add("library-item");
    }
}


const libraryContainer = document.getElementById('library-container');
const addBookBtn = document.getElementById('add-btn');
const modal = document.getElementById('add-modal');
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById('add-form');
const submit = document.getElementById('submit');

addBookBtn.addEventListener("click", openModal);
span.addEventListener("click", closeModal);
submit.addEventListener("click", getNewBook);

let myLibrary = [];
const myBook = new Book('Gospel According to Jesus', 'John Macarthur', '500');
myLibrary.push(myBook);
myLibrary.push(myBook);
myLibrary.push(myBook);
myLibrary.push(myBook);
myLibrary.push(myBook);
myLibrary.push(myBook);
myLibrary.push(myBook);
myLibrary.push(myBook);
myLibrary.push(myBook);
displayBook();

/* Open/Close Modal */
function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

function isInLibrary(book) {
    let title = myLibrary.find((oldBook, index) => {
        if(book.title === oldBook.title) {
            return true;
        }
        return false;
    })
}

/* Adding New Book */
function addBookFromInput() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    return new Book(title, author, pages);
}

function getNewBook(e) {
    e.preventDefault();
    const newBook = addBookFromInput();
    addBookToLibrary(newBook);
    console.log(Object.values(newBook));
    displayBook();
    form.reset();
    modal.style.display = "none";
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log("book added to library!");
    console.log(myLibrary);
}


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function displayBook() {
    libraryContainer.innerHTML = "";
    for (let book of myLibrary) {
        createCard(book);
    }
}

function createCard(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const removeBtn = document.createElement('button'); 

    bookCard.classList.add('library-item');

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = 'Remove';

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    buttonGroup.appendChild(removeBtn);
    bookCard.appendChild(buttonGroup);
    libraryContainer.appendChild(bookCard);
}



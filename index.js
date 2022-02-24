const libraryContainer = document.getElementById('library-container');
const addBookBtn = document.getElementById('add-btn');
const modal = document.getElementById('add-modal');
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById('add-form');
const submit = document.getElementById('submit');
// const read = document.getElementById('isRead');


addBookBtn.addEventListener("click", openModal);
span.addEventListener("click", closeModal);
submit.addEventListener("click", getNewBook);


let myLibrary = [];
const myBook1 = new Book('Gospel According to Jesus', 'John Macarthur', '500');
const myBook2 = new Book('hi', 'dawg', '500');
const myBook3 = new Book('bye', 'cat', '200');

myLibrary.push(myBook1);
myLibrary.push(myBook2);
myLibrary.push(myBook3);
// myLibrary.push(myBook);
// myLibrary.push(myBook);
// myLibrary.push(myBook);
// myLibrary.push(myBook);
// myLibrary.push(myBook);
// myLibrary.push(myBook);
// myLibrary.push(myBook);
// myLibrary.push(myBook);
displayBook();

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

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
    const isRead = document.getElementById('isRead').checked; 
    console.log('READ OR NOT', isRead);
    return new Book(title, author, pages, isRead);
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

function displayBook() {
    libraryContainer.innerHTML = "";
    for (let book of myLibrary) {
        createCard(book);
    }
}

function removeBook(title) {
    myLibrary = myLibrary.filter((book) => book.title !== title);
    displayBook();
    console.log("removed"); 
}

function createCard(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button'); 

    bookCard.classList.add('library-item');

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = 'Remove';
    
    if (book.isRead) {
        readBtn.textContent = 'Read';
        console.log('this book is read');
    }
    else {
        readBtn.textContent = 'Not Read';
        console.log('not read');
    }


    removeBtn.addEventListener("click", function(e) {
        removeBook(book.title);
    })

    readBtn.addEventListener("click", function(e) {
        if (readBtn.textContent =='Read') {
            readBtn.textContent = 'Not Read';
        }
        else {
            readBtn.textContent = 'Read';
        }
    })

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    buttonGroup.appendChild(removeBtn);
    buttonGroup.appendChild(readBtn);
    bookCard.appendChild(buttonGroup);
    libraryContainer.appendChild(bookCard);
}



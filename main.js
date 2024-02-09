//showing create book dialog on the screen
const showBtn = document.getElementById("createBook");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

//Listing book objects in Library array

const myLibrary = [];

//Book constructor

function Book(title, author, pages, isread) {
    //the constructor
        this.title = document.getElementById('title').value;
        this.author = document.getElementById('author').value;
        this.pages = document.getElementById('pages').value;
        this.isread = document.getElementById('isread').value;
        this.info = function () {
            return `${title} by ${author}, ${pages} ${isread}`
        }
}

//submitting new book
const create = document.getElementById('submit');

create.addEventListener("click", function (event) {

        //adding books to myLibrary array
        event.preventDefault();
        const book = new Book (title,author, pages, isread);
        myLibrary.push(book);

        //adding book cards to main page
        const bookList = document.getElementById('bookList');
        const bookCard = document.createElement('div');
        bookCard.className ='book';
        bookCard.setAttribute('data-index',myLibrary.length-1);
        bookCard.setAttribute('id',myLibrary.length-1);
        bookList.appendChild(bookCard);

        //adding book info to cards
        const bookHeader = document.createElement('h2');
        bookHeader.innerHTML = (title.value);
        bookCard.appendChild(bookHeader);

        const bookAuthor = document.createElement('h3');
        bookAuthor.innerHTML = (author.value);
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.innerHTML = (pages.value);
        bookCard.appendChild(bookPages);

        const bookIsread = document.createElement('p');
        bookIsread.innerHTML = (isread.value);
        bookCard.appendChild(bookIsread);

        const removeButton = document.createElement('button');
        removeButton.innerHTML=("Remove Book");
        removeButton.setAttribute=("id", "remove");
        bookCard.appendChild(removeButton);

});

//Önce remove butonunu seç
//Butonun altında olduğu öğeyi seç booklist
//sonra bu öğenin altındaki kitabı kaldır
//kitabı arrayden de kaldır
const removeBookButton = document.getElementById('remove');

removeBookButton.addEventListener('click', () => {
    const removingBook = removeBookButton.parentNode;
    const index = removingBook.dataset.index;
    myLibrary.splice(index,1);
})






 

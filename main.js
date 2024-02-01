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


//Listing books objects in Library array

const myLibrary = [
    {
        title: "Atatürk",
        author: "İlber Ortaylı",
        pages: 345,
        isread: "yes"
    }
];


const create = document.getElementById('submit');

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
create.addEventListener("click", function (event) {
    event.preventDefault();
        const book = new Book(title, author, pages, isread);
        myLibrary.push(book);
});

function addBookToLibrary () {
    //do stuff here

}

console.log(myLibrary);
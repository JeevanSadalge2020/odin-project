let button = document.querySelector("button");
let addNewBook = document.querySelector("form button");
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
const myLibrary = [];

addNewBook.addEventListener("click", (e) => {
  e.preventDefault();
  let title = bookTitle.value;
  let author = bookAuthor.value;
  addBookToLibrary(title, author);
});

function display(library) {
  let grid = document.querySelector(".grid");

  library.forEach((book) => {
    let article = document.createElement("article");
    let bookTitle = document.createElement("h3");
    let bookAuthor = document.createElement("p");
    let readBtn = document.createElement("button");
    let removeBtn = document.createElement("button");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    readBtn.textContent = "Read";
    removeBtn.textContent = "Remove";
    article.append(bookTitle, bookAuthor, readBtn, removeBtn);
    grid.append(article);
  });
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function addBookToLibrary(title, author) {
  let book = new Book(title, author);
  myLibrary.push(book);
  console.log("myLibrary", myLibrary);
}

// function display(myLibrary) {
//   let table = document.createElement("table");
//   let tr = document.createElement("tr");
//   let th_author = document.createElement("th");
//   th_author.textContent = "Author";
//   let th_title = document.createElement("th");
//   th_title.textContent = "Title";
//   tr.append(th_title, th_author);
//   table.append(tr);
//   myLibrary.forEach((book) => {
//     let tr = document.createElement("tr");
//     let td_author = document.createElement("td");
//     let td_title = document.createElement("td");
//     td_author.textContent = book.author;
//     td_title.textContent = book.title;
//     tr.append(td_title, td_author);
//     table.append(tr);
//   });
//   console.log("table", table);
//   if (!document.querySelector("table")) {
//     document.querySelector("body").append(table);
//   }
// }

// addBookToLibrary("atomic habits", "james clear");
// addBookToLibrary("you can win", "shiv khera");
// addBookToLibrary("alchemist", "paulo coulo");
// addBookToLibrary("power", "robert greene");

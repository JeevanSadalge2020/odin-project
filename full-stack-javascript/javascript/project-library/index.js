const myLibrary = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function addBookToLibrary(title, author) {
  let book = new Book(title, author);
  myLibrary.push(book);
  console.log("myLibrary", myLibrary);

  let grid = document.querySelector(".grid");

  let article = document.createElement("article");
  let bookTitleEle = document.createElement("h3");
  let bookAuthorEle = document.createElement("h4");
  let readBtnEle = document.createElement("button");
  let removeBtnEle = document.createElement("button");
  let btnContainer = document.createElement("div");

  readBtnEle.textContent = "Read";
  removeBtnEle.textContent = "Remove";
  bookTitleEle.textContent = capitalize(title);
  bookAuthorEle.textContent = capitalize(author);
  btnContainer.append(readBtnEle, removeBtnEle);

  article.append(bookTitleEle, bookAuthorEle, btnContainer);
  btnContainer.classList.add("article-btn-container");
  grid.append(article);
}

let titleInputEle = document.querySelector("#title");
let authorInputEle = document.querySelector("#author");
let addBookBtnEle = document.querySelector("button[type='submit']");

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = titleInputEle.value;
  let author = authorInputEle.value;
  addBookToLibrary(title, author);
});

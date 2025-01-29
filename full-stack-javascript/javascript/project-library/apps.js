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

function addBookToLibrary(bookTitle, bookAuthor) {
  let grid = document.querySelector(".grid");

  let article = document.createElement("article");
  let bookTitleEle = document.createElement("h3");
  let bookAuthorEle = document.createElement("h4");
  let readBtnEle = document.createElement("button");
  let removeBtnEle = document.createElement("button");
  let btnContainer = document.createElement("div");

  readBtnEle.textContent = "Read";
  removeBtnEle.textContent = "Remove";
  bookTitleEle.textContent = bookTitle;
  bookAuthorEle.textContent = bookAuthor;

  btnContainer.append(readBtnEle, removeBtnEle);

  article.append(bookTitleEle, bookAuthorEle, btnContainer);
  btnContainer.classList.add("article-btn-container");
  grid.append(article);
}

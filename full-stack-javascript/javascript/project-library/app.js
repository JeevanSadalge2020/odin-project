let button = document.querySelector("button");
button.addEventListener("click", () => {
  display(myLibrary);
});

const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  let book = new Book(title, author);
  myLibrary.push(book);
}

function display(myLibrary) {
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  let th_author = document.createElement("th");
  th_author.textContent = "Author";
  let th_title = document.createElement("th");
  th_title.textContent = "Title";
  tr.append(th_title, th_author);
  table.append(tr);
  myLibrary.forEach((book) => {
    let tr = document.createElement("tr");
    let td_author = document.createElement("td");
    let td_title = document.createElement("td");
    td_author.textContent = book.author;
    td_title.textContent = book.title;
    tr.append(td_title, td_author);
    table.append(tr);
  });
  if (!document.querySelector("table")) {
    document.querySelector("body").append(table);
  }
}

addBookToLibrary("atomic habits", "james clear");
addBookToLibrary("you can win", "shiv khera");
addBookToLibrary("alchemist", "paulo coulo");
addBookToLibrary("power", "robert greene");

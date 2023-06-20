let myLibrary = [{"name": "Lord of The Rings", "author": "JRR Tolkien", "pages": "300"}];

function Book(name, author, pages, read) { // object constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}


function addBookToLibrary(name, author, pages, read) { // add book to the library
    
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    saveLibrary();
}

document.addEventListener('DOMContentLoaded', function() { // working functions

    //document.querySelector("#submit").disabled = true;

    //document.querySelector("#newbook").onkeyup = () => {
        //document.querySelector("#submit").disabled = false;
    //}

    document.querySelector('form').onsubmit = () => {

        
        const book = document.querySelector("#newbook").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.getElementById("dropdown");
        const dropdown = read.options[read.selectedIndex].text;

        if (author === "" || pages === "") {

            let form = document.querySelector('form');
            let alert = document.createElement('p');
            alert.innerHTML = 'Please fill in all the form.';
            form.appendChild(alert); 
        } else {

            addBookToLibrary(book, author, pages, dropdown);
            displayLibrary();

            document.querySelector("#newbook").value = "";
            document.querySelector("#author").value = "";
            document.querySelector("#pages").value = "";

        }
        return false
    }

    loadLibrary();
    displayLibrary();

})

function displayLibrary() {

    let bookList = document.querySelector(".books");
    bookList.innerHTML = ""; // clear the existing list before re-adding books

    let index = 0; //index to keep track of data attribute 

    myLibrary.forEach((book) => {

        let Node = document.querySelector(".books"); //get the main ul
        let Child = document.createElement('li'); // create element and append text
        let Paragraph = document.createElement('p');

        let childText = document.createTextNode(`Name: ${book.name}, Author: ${book.author}, pages: ${book.pages} (${book.read})`);
        Child.setAttribute("data-index", index);

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute("type", "submit");
        deleteButton.setAttribute("value", "Delete");
        deleteButton.setAttribute("id", index);
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.innerHTML = "Delete";

        
        let readButton = document.createElement('button');
        readButton.setAttribute("type", "button");
        readButton.setAttribute("value", "Read");
        readButton.setAttribute("id", index);
        readButton.setAttribute("class", "read-button");
        readButton.innerHTML = "Change Status"
        
        deleteButton.addEventListener("click", (event) => {
            const index = event.target.id;
            deleteBook(index);
          });

        readButton.addEventListener("click", (event) => {
            const index = event.target.id;
            updateBookStatus(index);
        })


        Child.appendChild(Paragraph);
        Child.appendChild(deleteButton);
        Child.appendChild(readButton);
        Paragraph.appendChild(childText);
        Node.appendChild(Child);
        index++;
    });  
}

function saveLibrary() { 
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary)); // save the myLibrary array to local storage as a JSON string
}

function loadLibrary() {
    let storedLibrary = localStorage.getItem("myLibrary"); // retrieve the myLibrary array from local storage as a JSON string
    if (storedLibrary) {
        myLibrary = JSON.parse(storedLibrary); // convert the JSON string back to a JavaScript object
    }
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
    saveLibrary();
}

function updateBookStatus(index) {
    const book = myLibrary[index];
    if (book.read === "Read") {
        book.read = "Unread"
    } else {
        book.read = "Read"
    }
    displayLibrary()
}
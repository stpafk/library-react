import React, { Component } from "react";
import Books from "./components/Books";
import uniqid from "uniqid";

class App extends Component {
    constructor() {
        super();

        this.state = {
            book: { title: "",
                    author: "",
                    pages: "",
                    id: uniqid(),
                    status: "",
                    number: 1,
                },
            books: [],
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitBook = this.onSubmitBook.bind(this);
    }
    
    onChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            book: {
                ...this.state.book,
                [name]: value,
            }
        });
    }


    onSubmitBook = (e) => {
        e.preventDefault();
        this.setState({
            books: this.state.books.concat(this.state.book),
            book: {
                title: "",
                author: "",
                pages: "",
                id: uniqid(),
                status: "",
                number: this.state.book.number + 1,
            },
        });
    };

    render() {
        const {book, books} = this.state;

        return (
            <div className="bookForm">
                <form className="addBook" onSubmit={this.onSubmitBook}>
                    <label htmlFor="titleInput">Enter Book Title </label>
                    <input type="text" id="titleInput"
                        onChange={this.onChangeInput}
                        name="title"
                        value={book.title}>
                    </input>
                    <label htmlFor="authorInput">Author: </label>
                    <input type="text" id="authorInput" 
                        name="author"
                        onChange={this.onChangeInput}
                        value={book.author}>
                    </input>
                    <label htmlFor="pages">Pages: </label>
                    <input type="number" id="pagesInput"  
                        name="pages"                     
                        value={book.pages}       
                        onChange={this.onChangeInput}
                        min="0"
                        max="1000000">
                    </input>
                    <label htmlFor="status">Status: </label>
                    <select id="status" 
                        name = "status"
                        onChange={this.onChangeInput}
                        value={book.status}>
                        <option value="Unread" id="unread">Unread</option>
                        <option value="Reading" id="reading">Reading</option>
                        <option value="Read" id="read">Read</option>
                    </select>
                    <button type="submit">
                        Add Book
                    </button>  
                </form>
                <Books books={books}/>
            </div>
        ) 
    }
}

export default App;
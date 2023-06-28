import React, { Component } from "react";
import Books from "./components/Books";
import uniqid from "uniqid";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            book: { title: "",
                    author: "",
                    pages: "",
                    id: uniqid(),
                    status: "",
                },
            books: [],
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitBook = this.onSubmitBook.bind(this);
        this.onDeleteBook = this.onDeleteBook.bind(this);
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
            },
        });
    }

    onDeleteBook = (id) => {
        const newState = this.state.books.filter((book) => book.id !== id);

        this.setState({
            ...this.state.book,
            books : newState,
        })
    }

    render() {
        const {book, books} = this.state;

        return (
            <>
            <header>
                <h1>Your Library</h1>
            </header>
            <div className="bookForm">
                <h3>Add Book</h3>
                <form className="addBook" onSubmit={this.onSubmitBook}>
                    <label htmlFor="titleInput">Book Title: </label>
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
                    <button type="submit" className="submitBook">
                        Add Book
                    </button>  
                </form>
            </div>
            <div className="books">
                <Books books={books} deleteBook={this.onDeleteBook}/>
            </div>
            <footer>
                <h3>Created by stpafk</h3>
            </footer>
            </>
        ) 
    }
}

export default App;
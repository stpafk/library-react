import React, { Component } from "react";
import View from "./components/View";
import uniqid from "uniqid";

class App extends Component {
    constructor() {
        super();

        this.state = {
            book: { title: "",
                    author: "",
                    pages: "",
                    id: uniqid(),
                    read: "Read",
                    number: 1,
                },
            books: [],
        };
    }
    
    onChangeInput = (e) => {
        const value = e.target.value;
        this.setState({
            book: {
                ...this.state,
                [e.target.name]: value
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
                read: "Read",
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
                        onChange={this.onChangeInput}
                        value={book.author}>
                    </input>
                    <label htmlFor="pages">Pages: </label>
                    <input type="text" id="pagesInput"
                        
                        value={book.pages}>       
                    </input>
                    <select name="bookStatus" id="dropdown" onChange={this.onChangeInput}  value={book.read}>
                        <option value="Read" id="dropdown1">Read</option>
                        <option value="Unread" id="dropdown2">Unread</option>
                    </select>
                    <button type="submit">
                        Add Book
                    </button>  
                </form>
                <View books={books}/>
            </div>
        ) 
    }
}

export default App;
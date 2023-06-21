import React, { Component } from "react";
import View from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
    constructor() {
        super();

        this.state = {
            book: { title: "",
                    author: "",
                    pages: "",
                    id: uniqid(),
                    read: false,
                    number: 1,
                },
            books: [],
        };
    }
    /*
    onChangeTitle = (e) => {
        this.setState({
            book: { title: e.target.value,
            author: this.state.book.author,
            pages: this.state.book.pages,
            read: this.state.book.read, 
            id: this.state.book.id}
        })
    }

    onChangeAuthor = (e) => {
        this.setState({
            book: { title: this.state.book.title,
            author: e.target.value,
            pages: this.state.book.pages,
            read: this.state.book.read, 
            id: this.state.book.id}
        })
    }

    onChangePages = (e) => {
        this.setState({
            book: { title: this.state.book.title,
            author: e.target.value,
            pages: this.state.book.pages,
            read: this.state.book.read, 
            id: this.state.book.id}
        })
    }
    */
    onSubmitBook = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.stasks.concat(this.state.book),
            book: {
                title: "",
                author: "",
                pages: "",
                id: uniqid(),
                read: false,
                number: this.state.book.number + 1,
            },
        });
    };

    render() {
        const {book, books} = this.state;

        return (
            <div className="bookForm">
                <form className="addBook" onChange={this.onSubmitBook}>
                    <label htmlFor="titleInput">Enter Book Title </label>
                    <input type="text" id="titleInput" onChange={this.onChangeTitle} value={book.text}></input>
                    <label htmlFor="authorInput">Author: </label>
                    <input type="text" id="authorInput" value={book.author}></input>
                    <label htmlFor="pages">Pages: </label>
                    <input type="text" id="pagesInput"></input>
                    <select name="bookStatus" id="dropdown">
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
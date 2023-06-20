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
                },
            books: [],
        };
    }

    onChangeTitle = (e) => {
        this.setState({
            book: { title: e.target.value,
            author: this.state.book.author,
            pages: this.state.book.pages,
            read: this.state.book.read, 
            id: this.state.book.id}
        })
    }

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
            },
        });
    };

    render() {
        const {book, books} = this.state;

        return (
            <div className="bookForm">
                <form className="addBook" onChange={this.onSubmitBook}>
                    <label htmlFor="titleInput">Enter Book Title</label>
                    <input type="text" id="titleInput" onChange={this.onChangeTitle} value={book.text}></input>
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
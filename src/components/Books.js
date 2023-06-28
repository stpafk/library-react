import React from "react";

const View = (props) => {
    const {books, deleteBook} = props;

    return (
        <ol>
            {books.length === 0 ? 
            <h1 className="empty">No books registered yet.</h1> : <h1 className="Title">Your Books</h1>}
            {books.map((book) => {
                if (book.status === "") {
                    book.status = "Unread";
                }
                return <div className="bookDiv" id={book.id}>
                    <li key={book.id}>
                        <h3 className="bookTitle">Title: {book.title}</h3>
                        <h4 className="bookAuthor">Author: {book.author}</h4>
                        <p className="bookPages">Pages: {book.pages}</p>
                        <p className="bookRead">Status: {book.status}</p>
                        <button className="book delete" type="submit"
                        onClick={() => deleteBook(book.id)} key={book.id}>Delete</button>
                    </li>         
                </div>
            })}
        </ol>
    )

}

export default View;
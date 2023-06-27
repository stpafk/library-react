import React from "react";

const View = (props) => {
    const {books} = props;

    return (
        <ul>
            {books.map((book) => {
                if (book.status === "") {
                    book.status = "Unread";
                }
                return <div className="bookDiv" id={book.id}>
                    <li key={book.id}>{book.number}
                        <h3 className="bookTitle">Title: {book.title}</h3>
                        <h4 className="bookAuthor">Author: {book.author}</h4>
                        <p className="bookPages">Pages: {book.pages}</p>
                        <p className="bookRead">Status: {book.status}</p>
                    </li>         
                </div>
            })}
        </ul>
    )

}

export default View;
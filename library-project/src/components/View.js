import React from "react";

const View = (props) => {
    const {books} = props;
    
    return (
        <ul>
            {books.map((book) => {
                return <div className="bookDiv" id={book.id}>
                    <li key={book.id}>{book.number}</li>
                    <h3 className="bookTitle">{book.title}</h3>
                    <h4 className="bookAuthor">{book.author}</h4>
                    <p className="bookPages">{book.pages}</p>
                    <p className="bookRead">{book.read}</p>
                </div>
            })}
        </ul>
    )

}

export default View;
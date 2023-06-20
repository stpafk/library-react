import React from "react";

const View = (props) => {
    const books = props;
    
    return (
        <ul>
            {books.map((book) => {
                return <div className="bookDiv"></div>
            })}
        </ul>
    )

}

export default View;
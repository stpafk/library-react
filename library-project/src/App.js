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
                },
            read : false,
        };
    }

    

    onSubmitBook = (e) => {

    } 

}
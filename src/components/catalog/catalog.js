import React, {useEffect, useState} from "react";
import {Row, Col, Alert} from "reactstrap";

import BookCard from "../book-card/book-card";

const Catalog = () => {

    const getData = () => {
        fetch("/mock/books.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            setBooks(jsonData);
        });
    }

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Row xs={"3"}>
                {
                    books.map(book => {
                        return (
                            <BookCard key={`book-${book.id}`} book={book} />
                        )
                    })
                }
            </Row>
        </div>
    );
}

export default Catalog;
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert} from "reactstrap";

import {GetBooks} from "../../redux/reducers/books";

import BookCard from "../book-card/book-card";

const Catalog = (props) => {

    useEffect(() => {
        props.getBooks();
    }, []);

    return (
        <div>
            <Row xs={"3"}>
                {
                    props.books && props.books.map(book => {
                        return (
                            <BookCard key={`book-${book.id}`} book={book} />
                        )
                    })
                }
            </Row>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(new GetBooks())
    }
}

export default connect(state => ({
    books: state.books.books
}), mapDispatchToProps)(Catalog);
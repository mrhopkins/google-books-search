import React from "react";
import { Col, Row } from "../Grid";

export function BookList({ children }) {
    return (
        <ul className="list-group">{children}</ul> 
    );
};

export function BookListItem({
    id,
    title,
    authors,
    description,
    thumbnail,
    href,
    clickEvent,
    saved
}) {
    return (
        <li className="list-group-item">
            {!saved ? (
            <button className="float-right btn btn-success" onClick={event => clickEvent(event, title, authors, description, href, thumbnail)}>Save</button>
            ) : (
            <button className="float-right btn btn-danger" onClick={event => clickEvent(event, id)}>Delete</button>
            )}
            <a className="float-right btn btn-primary ml-2 mr-2" href={href} target="_blank" rel="noopener noreferrer">View</a>
            <h4>{title}</h4>
            <h5>by {authors.length > 1 ? (authors.reduce((prev, curr) => [prev, ", ", curr])) : authors[0]}</h5>
            <Row>
                <div className="col-auto">
                    <img src={thumbnail} alt={title} />
                </div>
                <Col>
                    <p>{description}</p>
                </Col>
            </Row>
        </li>
    );
};
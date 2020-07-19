import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import './books.scss';

const reduceArrayIntoGroupsOf3 = (array = []) => {
  let arrayOfRows = [];
  if (array) {
    let row = [];
    arrayOfRows = array.reduce((acc, item, index) => {
      row.push(item);
      if (index % 3 === 2) {
        acc.push(row);
        row = [];
      }
      return acc;
    }, []);
    arrayOfRows.push(row);
  }
  return arrayOfRows;
};

const BookList = ({ response = [] }) => {
  const arrayOfRows = !!response && reduceArrayIntoGroupsOf3(response.books);

  return (
    !!arrayOfRows &&
    arrayOfRows.map((row) => (
      <Row key={Math.random()}>
        {row.map(
          ({
            book_pages,
            book_publication_city,
            book_publication_country,
            book_publication_year,
            book_title,
            book_author,
            id,
          }) => (
            <Col xs='12' lg='4' className='book' key={id}>
              <Card className='book__card'>
                <Card.Body>
                  <Card.Title>
                    {book_title} ({book_publication_year}) <i>by</i>{' '}
                    <span className='book__authors'>
                      {book_author.join(', ')}
                    </span>
                  </Card.Title>
                  <Card.Text>
                    Publication place {book_publication_city},{' '}
                    {book_publication_country}{' '}
                  </Card.Text>
                  <Card.Text>Pages {book_pages}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    ))
  );
};

export default BookList;

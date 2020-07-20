import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Book } from './';

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
        {row.map((book) => (
          <Col xs='12' lg='4' className='book' key={book.id}>
            <Book {...book} />
          </Col>
        ))}
      </Row>
    ))
  );
};

export default BookList;

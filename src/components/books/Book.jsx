import React from 'react';

import { Card } from 'react-bootstrap';

const Book = ({
  book_pages,
  book_publication_city,
  book_publication_country,
  book_publication_year,
  book_title,
  book_author,
}) => {
  return (
    <Card className='book__card'>
      <Card.Body>
        <Card.Title>
          {book_title} ({book_publication_year}) <i>by</i>{' '}
          <span className='book__authors'>
            {!!book_author && book_author.join(', ')}
          </span>
        </Card.Title>
        <Card.Text>
          Publication place {book_publication_city}, {book_publication_country}{' '}
        </Card.Text>
        {!!book_pages && <Card.Text>Pages {book_pages}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Book;

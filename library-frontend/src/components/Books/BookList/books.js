import React from 'react';
import BookItem from '../BookItem/bookItem';
import { Link } from 'react-router-dom';

const Books = ({ books, onDelete, onEdit, onMarkAsRented }) => (
  <div className='container mm-4 mt-5'>
    <div className='row'>
      <div className='table-responsive'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Category</th>
              <th scope='col'>Author</th>
              <th scope='col'>Available copies</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookItem
                key={`book-${book.id}`}
                book={book}
                onDelete={onDelete}
                onEdit={onEdit}
                onMarkAsRented={onMarkAsRented}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className='col mb-3'>
        <div className='row'>
          <div className='col-sm-12 col-md-12'>
            <Link className='btn btn-block btn-dark' to='/books/add'>
              Add new book
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Books;

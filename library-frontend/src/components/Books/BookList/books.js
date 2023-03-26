import React from 'react';
import BookItem from '../BookItem/bookItem';

const Books = ({ books }) => (
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
              <BookItem book={book} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Books;

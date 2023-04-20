import React from 'react';

const BookListEmpty = () => (
  <div className='text-center'>
    <img src='/logo512.png' width={120} height={120} className='mb-4' />
    <h1>No books found</h1>
    <div>To add a book, click on the "Add new book" button</div>
  </div>
);

export default BookListEmpty;

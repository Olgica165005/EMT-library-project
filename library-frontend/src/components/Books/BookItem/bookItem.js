import React from 'react';

const BookItem = ({ book, onDelete }) => (
  <tr>
    <td>{book.name}</td>
    <td>{book.category}</td>
    <td>{`${book.author.name} ${book.author.surname}`}</td>
    <td>{book.availableCopies}</td>
    <td>
      <button title='Delete' className='btn btn-danger' onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </td>
  </tr>
);

export default BookItem;

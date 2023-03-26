import React from 'react';

const BookItem = ({ book }) => (
  <tr key={`book-${book.id}`}>
    <td>{book.name}</td>
    <td>{book.category}</td>
    <td>{`${book.author.name} ${book.author.surname}`}</td>
    <td>{book.availableCopies}</td>
  </tr>
);

export default BookItem;

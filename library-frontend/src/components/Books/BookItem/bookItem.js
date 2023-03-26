import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book, onDelete, onEdit, onMarkAsRented }) => (
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
    <td>
      <Link className='btn btn-info' onClick={() => onEdit(book.id)} to={`/books/edit/${book.id}`}>
        Edit
      </Link>
    </td>
    <td>
      <button
        className={`btn ${book.availableCopies > 0 ? 'btn-warning' : 'btn-secondary'}`}
        onClick={() => onMarkAsRented(book.id)}
        disabled={book.availableCopies === 0}
      >
        Mark as rented
      </button>
    </td>
  </tr>
);

export default BookItem;

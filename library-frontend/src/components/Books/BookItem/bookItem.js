import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book, onDelete, onEdit }) => (
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
  </tr>
);

export default BookItem;

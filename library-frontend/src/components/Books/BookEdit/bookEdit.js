import React from 'react';
import { useHistory } from 'react-router-dom';

const BookEdit = ({ book, categories, authors, onEditBook }) => {
  const history = useHistory();
  const [formData, updateFormData] = React.useState({
    name: '',
    category: 0,
    authorId: 0,
    availableCopies: 0,
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name !== '' ? formData.name : book.name;
    const category = formData.category !== 0 ? formData.category : book.category;
    const authorId = formData.authorId !== 0 ? formData.authorId : book.author.id;
    const availableCopies =
      formData.availableCopies !== 0 ? formData.availableCopies : book.availableCopies;

    onEditBook(book.id, name, category, authorId, availableCopies);
    history.push('/books');
  };

  return (
    <div className='row mt-5'>
      <div className='col-md-5'>
        <form onSubmit={onFormSubmit}>
          <div className='form-group'>
            <label htmlFor='name' className='mb-1'>
              Book name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              defaultValue={book.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-group mt-3'>
            <label className='mb-1'>Category</label>
            <select name='category' className='form-control' onChange={handleChange}>
              {categories.map((category) => (
                <option
                  key={`category-option-${category}`}
                  selected={book.category === category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group mt-3'>
            <label className='mb-1'>Author</label>
            <select name='authorId' className='form-control' onChange={handleChange}>
              {authors.map((author) => (
                <option
                  key={`author-option-${author.id}`}
                  selected={book.author?.id === author.id}
                  value={author.id}
                >
                  {`${author.name} ${author.surname}`}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='availableCopies' className='mb-1'>
              Available copies
            </label>
            <input
              type='number'
              className='form-control'
              id='availableCopies'
              name='availableCopies'
              defaultValue={book.availableCopies}
              onChange={handleChange}
            />
          </div>
          <button id='submit' type='submit' className='btn btn-primary mt-5'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookEdit;

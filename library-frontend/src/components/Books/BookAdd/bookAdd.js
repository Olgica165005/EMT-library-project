import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BookAdd = ({ categories, authors, onAddBook }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    authorId: null,
    availableCopies: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name;
    const category = formData.category;
    const authorId = formData.authorId;
    const availableCopies = formData.availableCopies;

    onAddBook(name, category, authorId, availableCopies);
    history.push('/books');
  };

  return (
    <div className='row mt-5'>
      <div className='col-md-5'>
        <form onSubmit={onFormSubmit}>
          <div className='form-group mt-3'>
            <label htmlFor='name' className='mb-1'>
              Book name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              required
              placeholder='Enter book name'
              onChange={handleChange}
            />
          </div>
          <div className='form-group mt-3'>
            <label className='mb-1'>Category</label>
            <select name='category' className='form-control' onChange={handleChange}>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group mt-3'>
            <label className='mb-1'>Author</label>
            <select name='authorId' className='form-control' onChange={handleChange}>
              {authors?.map((author) => (
                <option
                  key={`author-${author.id}`}
                  value={author.id}
                >{`${author.name} ${author.surname}`}</option>
              ))}
            </select>
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='quantity' className='mb-1'>
              Available copies
            </label>
            <input
              type='text'
              className='form-control'
              id='availableCopies'
              name='availableCopies'
              placeholder='Available copies'
              required
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

export default BookAdd;

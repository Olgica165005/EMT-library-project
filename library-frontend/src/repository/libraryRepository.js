import axios from '../custom-axios/axios';

const LibraryService = {
  fetchBooks: () => axios.get('/books'),
  fetchCategories: () => axios.get('/categories'),
  fetchAuthors: () => axios.get('/authors'),
  deleteBook: (id) => axios.delete(`/books/delete/${id}`),
  addBook: (name, category, authorId, availableCopies) =>
    axios.post('/books/add', {
      name: name,
      category: category,
      authorId: authorId,
      availableCopies: availableCopies,
    }),
  editBook: (id, name, category, authorId, availableCopies) =>
    axios.put(`/books/edit/${id}`, {
      name: name,
      category: category,
      authorId: authorId,
      availableCopies: availableCopies,
    }),
  getBook: (id) => axios.get(`/books/${id}`),
  markBookAsRented: (id) => axios.patch(`/books/markAsRented/${id}`),
};

export default LibraryService;

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
};

export default LibraryService;

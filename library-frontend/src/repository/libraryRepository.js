import axios from '../custom-axios/axios';

const LibraryService = {
  fetchBooks: () => axios.get('/books'),
  fetchCategories: () => axios.get('/categories'),
};

export default LibraryService;

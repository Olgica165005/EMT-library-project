import { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import LibraryService from '../../repository/libraryRepository';
import Books from '../Books/BookList/books';
import Categories from '../Categories/categories';
import Header from '../Header/header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      categories: [],
    };
  }

  componentDidMount() {
    this.loadBooks();
    this.loadCategories();
  }

  loadBooks = () => {
    LibraryService.fetchBooks().then(({ data }) => this.setState({ books: data }));
  };

  loadCategories = () => {
    LibraryService.fetchCategories().then(({ data }) => this.setState({ categories: data }));
  };

  render() {
    return (
      <Router>
        <Header />
        <main>
          <div className='container'>
            <Route path='/books' exact render={() => <Books books={this.state.books} />} />
            <Route
              path='/categories'
              exact
              render={() => <Categories categories={this.state.categories} />}
            />
            <Redirect to='/books' />
          </div>
        </main>
      </Router>
    );
  }
}

export default App;

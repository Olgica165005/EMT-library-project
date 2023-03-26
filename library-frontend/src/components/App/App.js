import { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LibraryService from '../../repository/libraryRepository';
import Books from '../Books/BookList/books';
import BookAdd from '../Books/BookAdd/bookAdd';
import Categories from '../Categories/categories';
import Header from '../Header/header';
import BookEdit from '../Books/BookEdit/bookEdit';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      categories: [],
      authors: [],
      selectedBook: {},
    };
  }

  componentDidMount() {
    this.loadBooks();
    this.loadCategories();
    this.loadAuthors();
  }

  loadBooks = () => {
    LibraryService.fetchBooks().then(({ data }) => this.setState({ books: data }));
  };

  loadCategories = () => {
    LibraryService.fetchCategories().then(({ data }) => this.setState({ categories: data }));
  };

  loadAuthors = () => {
    LibraryService.fetchAuthors().then(({ data }) => this.setState({ authors: data }));
  };

  deleteBook = (id) => {
    LibraryService.deleteBook(id).then(this.loadBooks);
  };

  addBook = (name, category, authorId, availableCopies) => {
    LibraryService.addBook(name, category, authorId, availableCopies).then(this.loadBooks);
  };

  getBook = (id) => {
    LibraryService.getBook(id).then(({ data }) => this.setState({ selectedBook: data }));
  };

  editBook = (id, name, category, authorId, availableCopies) => {
    LibraryService.editBook(id, name, category, authorId, availableCopies).then(this.loadBooks);
  };

  markBookAsRented = (id) => {
    LibraryService.markBookAsRented(id).then(this.loadBooks);
  };

  render() {
    return (
      <Router>
        <Header />
        <main>
          <div className='container'>
            <Switch>
              <Route
                path='/books/add'
                exact
                render={() => (
                  <BookAdd
                    categories={this.state.categories}
                    authors={this.state.authors}
                    onAddBook={this.addBook}
                  />
                )}
              />
              <Route
                path='/books/edit/:id'
                exact
                render={() => (
                  <BookEdit
                    book={this.state.selectedBook}
                    categories={this.state.categories}
                    authors={this.state.authors}
                    onEditBook={this.editBook}
                  />
                )}
              />
              <Route
                path='/books'
                exact
                render={() => (
                  <Books
                    books={this.state.books}
                    onDelete={this.deleteBook}
                    onEdit={this.getBook}
                    onMarkAsRented={this.markBookAsRented}
                  />
                )}
              />
              <Route
                path='/categories'
                exact
                render={() => <Categories categories={this.state.categories} />}
              />
              <Redirect to='/books' />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;

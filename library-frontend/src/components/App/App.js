import { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LibraryService from '../../repository/libraryRepository';
import Books from '../Books/BookList/books';
import BookAdd from '../Books/BookAdd/bookAdd';
import Categories from '../Categories/categories';
import Header from '../Header/header';
import BookEdit from '../Books/BookEdit/bookEdit';
import PageNotFound from '../PageNotFound/pageNotFound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      categories: [],
      authors: [],
      selectedBook: {},
      pagination: { pageNumber: 0, size: 5, totalPages: 0 },
    };
  }

  componentDidMount() {
    this.loadBooksPaginated();
    this.loadCategories();
    this.loadAuthors();
  }

  loadBooksPaginated = () => {
    const { pageNumber, size } = this.state.pagination;
    LibraryService.fetchBooksPaginated(pageNumber, size).then(({ data }) =>
      this.setState({
        books: data.content,
        pagination: { pageNumber, size, totalPages: data.totalPages },
      }),
    );
  };

  changePage = (pageNumber) => {
    this.setState(
      { pagination: { ...this.state.pagination, pageNumber } },
      this.loadBooksPaginated,
    );
  };

  loadCategories = () => {
    LibraryService.fetchCategories().then(({ data }) => this.setState({ categories: data }));
  };

  loadAuthors = () => {
    LibraryService.fetchAuthors().then(({ data }) => this.setState({ authors: data }));
  };

  deleteBook = (id) => {
    LibraryService.deleteBook(id).then(this.loadBooksPaginated);
  };

  addBook = (name, category, authorId, availableCopies) => {
    LibraryService.addBook(name, category, authorId, availableCopies).then(this.loadBooksPaginated);
  };

  getBook = (id) => {
    LibraryService.getBook(id).then(({ data }) => this.setState({ selectedBook: data }));
  };

  editBook = (id, name, category, authorId, availableCopies) => {
    LibraryService.editBook(id, name, category, authorId, availableCopies).then(
      this.loadBooksPaginated,
    );
  };

  markBookAsRented = (id) => {
    LibraryService.markBookAsRented(id).then(this.loadBooksPaginated);
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
                path={['/books', '/']}
                exact
                render={() => (
                  <Books
                    books={this.state.books}
                    pagination={this.state.pagination}
                    onDelete={this.deleteBook}
                    onEdit={this.getBook}
                    onMarkAsRented={this.markBookAsRented}
                    onChangePage={this.changePage}
                  />
                )}
              />
              <Route
                path='/categories'
                exact
                render={() => <Categories categories={this.state.categories} />}
              />
              <Route path='/404' exact render={() => <PageNotFound />} />
              <Redirect to='/404' />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;

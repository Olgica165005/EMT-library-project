import React, { Component } from 'react';
import BookItem from '../BookItem/bookItem';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import BookListEmpty from '../BookListEmpty/bookListEmpty';

class Books extends Component {
  handlePageChange = (data) => {
    this.props.onChangePage(data.selected);
  };

  renderBooks = () => {
    const { books, onDelete, onEdit, onMarkAsRented } = this.props;

    return books.map((book) => (
      <BookItem
        key={`book-${book.id}`}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
        onMarkAsRented={onMarkAsRented}
      />
    ));
  };

  renderTable = () => {
    const {
      pagination: { pageNumber, totalPages },
    } = this.props;

    return (
      <>
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Category</th>
                <th scope='col'>Author</th>
                <th scope='col'>Available copies</th>
              </tr>
            </thead>
            <tbody>{this.renderBooks()}</tbody>
          </table>
        </div>
        <ReactPaginate
          forcePage={pageNumber}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          onPageChange={this.handlePageChange}
          previousLabel='< Back'
          nextLabel='Next >'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          className='pagination justify-content-center mt-3'
          activeClassName='active'
        />
      </>
    );
  };

  render() {
    const { books } = this.props;

    return (
      <div className='container mm-4 mt-5'>
        <div className='row'>
          {!!books.length ? this.renderTable() : <BookListEmpty />}

          <div className='col mt-5'>
            <div className='row text-center'>
              <div className='col-sm-12 col-md-12'>
                <Link className='btn btn-block btn-primary text-white' to='/books/add'>
                  Add new book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;

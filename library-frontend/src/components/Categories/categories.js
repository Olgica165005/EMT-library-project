import React from 'react';

const Categories = ({ categories }) => (
  <div className='container mm-4 mt-5'>
    <div className='row'>
      <div className='table-responsive'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Category</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category}>
                <td>{category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Categories;

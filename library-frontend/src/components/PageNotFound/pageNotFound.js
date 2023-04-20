import React from 'react';

const PageNotFound = () => (
  <div className='text-center mt-5'>
    <img width={250} height={250} src={require('./tornPage.png')} />
    <h1 className='mt-4 mb-2'>404</h1>
    <h3>Page not found</h3>
    <div className='mt-3'>The page you are looking for does not exist</div>
    <a href='/books'>Go back to the home page</a>
  </div>
);

export default PageNotFound;

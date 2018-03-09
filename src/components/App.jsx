import React from 'react';

import Header from './Header';
import MoviesGrid from './MoviesGrid';

/**
 * The main component of the App
 *
 */
const App = () => (
  <div className="lightGrey">
    <Header />
    <MoviesGrid />
  </div>
);

export default App;

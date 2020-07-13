import React from 'react';

import '../styles/main.scss'
import Nav from './Nav';
import ProductContainer from './ProductContainer';
import Summary from './Summary';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <ProductContainer />
      <Summary />
      <Footer />
    </div>
  );
}

export default App;

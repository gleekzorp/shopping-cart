import React from 'react';

import '../styles/main.scss'
import Nav from './Nav';
import ProductContainer from './ProductContainer';
import Summary from './Summary';
import Footer from './Footer';
import ProductsProvider from '../providers/ProductsProvider';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Nav />
        <div className="shopping-cart-container">
          <ProductContainer />
          <Summary />
        </div>
        <Footer />
      </ProductsProvider>
    </div>
  );
}

export default App;

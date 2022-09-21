import React from 'react';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import HeaderTop from '../components/HeaderTop';
import Navigation from '../components/Navigation';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div className='home'>
        <header>
          <HeaderTop />
          <Banner />
          <CategoryList />
        </header>
        <main>
          <Navigation />
          <ProductList />
        </main>
        <footer>
            
        </footer>
    </div>
  )
}

export default Home;
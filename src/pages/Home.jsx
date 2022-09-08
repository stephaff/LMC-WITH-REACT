import React from 'react';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import HeaderTop from '../components/HeaderTop';

function Home() {
  return (
    <div className='home'>
        <header>
          <HeaderTop />
          <Banner />
          <CategoryList />
        </header>
        <main>

        </main>
        <footer>
            
        </footer>
    </div>
  )
}

export default Home;
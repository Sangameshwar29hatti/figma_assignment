import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <MainSection />
    <Footer />
  </div>
);

export default App;

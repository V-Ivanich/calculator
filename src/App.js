
import React from 'react';
import './App.css';
import './source/Header';
import Header from './source/Header';
import './source/Main';
import Main from './source/Main';
import Footer from './source/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;

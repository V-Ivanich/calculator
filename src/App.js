
import React from 'react';
import './App.css';
import './source/Header';
import Header from './source/Header';
import './source/Main';
import Main from './source/Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;

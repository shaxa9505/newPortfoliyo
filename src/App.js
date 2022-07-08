import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import "./App.css"
import Main from './components/Main';
import Section from './components/Section';
import Main2 from './components/Main2';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App(props) {
  return (
    <div>
      <Header />
      <Main />
      <Main2 />
      <Section />
      <Menu />
      <Footer />
    </div>
  );
}


export default App;
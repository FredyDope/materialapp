import React, { Component, Fragment } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Exercices from '../components/exercices'



class Home extends Component {
  render() {
    return (
       <Fragment>
          <Header />
          <h1>Home</h1>
          <Exercices />
          <Footer />
      </Fragment>
    );
  }
}

export default Home;
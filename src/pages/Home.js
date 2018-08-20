import React, { Component, Fragment } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Exercises from '../components/exercises'
import { exercises, muscles } from '../components/Stores'



class Home extends Component {
	state = {
		exercises
	}

  render() {
    return (
       <Fragment>
          <Header />
          <Exercises />
          <Footer
          	muscles={muscles} 
          />
      </Fragment>
    );
  }
}

export default Home;
import React, { Component, Fragment } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Exercises from '../components/exercises'
import { exercises, muscles } from '../components/Stores'



class Home extends Component {
	state = {
		exercises
	}
//avec la methode reduce on renvoi dans la console les objets exercises triés par categories
//avec object.entries on renvoi des tableaux de categories contenant un tableau avec les exercises référents. 
	getExercisesByGroup(){
		return Object.entries
			(this.state.exercises.reduce((exercises, exercise) => {
				const{ muscles } = exercise

				exercises[muscles] = exercises[muscles]
				? [...exercises[muscles], exercise]
				: [exercise]
			
				return exercises 
			}, {})
		)
	}

  render() {
  	console.log(this.getExercisesByGroup())
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
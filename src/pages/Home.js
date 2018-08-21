import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Exercises from '../components/exercises'
import { exercises, muscles } from '../components/Stores'

class Home extends Component {
	state = {
		exercises,
		exercise: {}
	}
//avec la methode reduce on renvoi dans la console les objets exercises triés par categories
//avec object.entries on renvoi un tableau contenant des tableaux de categorie contenant un tableau avec les exercises référents. 
	getExercisesByGroup(){
		return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
				const{ muscles } = exercise
				exercises[muscles] = exercises[muscles]
				? [...exercises[muscles], exercise]
				: [exercise]
			
				return exercises 
			}, {})
		)
	}

	handleCategorySelected = category => {
		this.setState({
			category
		})
	}

	handleExerciseSelected = id => {
		this.setState(({ exercises }) => ({
			exercise: exercises.find(ex => ex.id === id)
		}))
	}

  render() {
  	//console.log(this.getExercisesByGroup())
  	const exercises = this.getExercisesByGroup(),
  		{ category, exercise } = this.state

    return (
       <Fragment>
          <Header />

          <Exercises  
          	exercise={ exercise }
          	category={ category }
          	exercises={ exercises }
          	onSelect={this.handleExerciseSelected}

          />

          <Footer
          	category={ category }
          	muscles={ muscles }
          	onSelect={this.handleCategorySelected} 

          />
      </Fragment>
    )
  }
}

export default Home;
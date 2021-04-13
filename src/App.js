import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

import Simple from './components/Simple';

class App extends Component {
  state = {
    pizzas: [],
    pizzaToEdit: {
      topping: '',
      size: 'Small',
      vegetarian: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(pizzas => this.setState({ pizzas }))
  }

  editPizza = pizza => this.setState({ pizzaToEdit: pizza });

  submitEditedPizza = pizza => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        size: pizza.size,
        topping: pizza.topping,
        vegetarian: pizza.vegetarian
      })
    }).then(response => response.json())
      .then(() => this.setState(prevState => {
        const newState = {...prevState};
        const index = prevState.pizzas.findIndex(tempPizza => tempPizza.id === pizza.id);
        newState.pizzas[index] = pizza;
        newState.pizzaToEdit =  {
          topping: '',
          size: 'Small',
          vegetarian: null
        };
        return newState;
      }));
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaToEdit} onSubmit={this.submitEditedPizza} />
        <PizzaList pizzas={this.state.pizzas} onClick={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
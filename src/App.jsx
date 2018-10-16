import React, { Component } from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemons } from './actions/pokemonsActions';

export class App extends Component {
  static propTypes = {
    //pokemons: PropTypes.array,
  }

  componentWillMount() {
    this.props.fetchPokemons();
  }

  getPokemons = () => {
    this.props.fetchPokemons();
  }

  componentDidMount() {
    console.log(this.props.pokemons);
  }

  render() {

    const pokemons = this.props.pokemons;
    const mappedPokemons = pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)
    return (
      <div className="App">
        <button onClick={this.getPokemons}>fetchPokemons</button>
        <ul>
          {mappedPokemons}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.pokemons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => {
      dispatch(fetchPokemons());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

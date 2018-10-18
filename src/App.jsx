import React, { Component } from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPokemons from './actions/pokemonsActions';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Pagination from './components/Pagination/Pagination';

export class App extends Component {
  componentWillMount() {
    const { getPokemons } = { ...this.props };
    getPokemons();
  }

  changePage = (page) => {
    const { getPokemons } = { ...this.props };
    getPokemons(page);
  }

  render() {
    const {
      currentPage,
      maxPages,
      pokemons,
      pokemonsFetched,
    } = { ...this.props };

    const mappedPokemons = pokemons.map(pokemon => (
      <PokemonCard
        key={pokemon.num}
        pokemon={pokemon}
        image={pokemon.img}
        number={pokemon.num}
        name={pokemon.name}
        pokemonType={pokemon.type}
      />
    ));

    return (
      <div className="container">
        {pokemonsFetched
          && mappedPokemons
        }
        <div className="pagination-wrapper">
          <Pagination
            last={this.changePage}
            lastPageNumber={maxPages}
            currentPageNumber={currentPage}
            maxPages={maxPages}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
  pokemonsFetched: state.pokemons.pokemonsFetched,
  currentPage: state.pokemons.currentPage,
  maxPages: state.pokemons.maxPages,
});

const mapDispatchToProps = dispatch => ({
  getPokemons: (page) => {
    dispatch(fetchPokemons(page));
  },
});

App.propTypes = {
  currentPage: PropTypes.number,
  maxPages: PropTypes.number,
  pokemonsFetched: PropTypes.bool,
};

App.defaultProps = {
  currentPage: 1,
  maxPages: 8,
  pokemonsFetched: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

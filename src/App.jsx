import React, { Component } from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPokemons from './actions/pokemonsActions';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Pagination from './components/Pagination/Pagination';

export class App extends Component {
  static propTypes = {
    //pokemons: PropTypes.array,
  }

  componentWillMount() {
    this.props.fetchPokemons();
  }

  changePage = (page) => {
    this.props.fetchPokemons(page);
  }

  componentDidMount() {
    console.log(this.props.pokemons);
  }

  render() {
    console.log('pokemonsFetched', this.props.currentPage, this.props.maxPages)
    const mappedPokemons = this.props.pokemons.map((pokemon, index) => 
        <PokemonCard 
          key={index} 
          image={pokemon.img} 
          number={pokemon.num} 
          name={pokemon.name}
          pokemonType={pokemon.type}>
        </PokemonCard>
      );
    
    return (
      <div className="container">
        {this.props.pokemonsFetched &&
          mappedPokemons
        }
        <div className="pagination-wrapper">
          <Pagination 
            last={this.changePage}
            lastPageNumber={this.props.maxPages}
            currentPageNumber={this.props.currentPage}
            maxPages={this.props.maxPages}
          ></Pagination>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.pokemons,
    pokemonsFetched: state.pokemons.pokemonsFetched,
    currentPage: state.pokemons.currentPage,
    maxPages: state.pokemons.maxPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: (page) => {
      dispatch(fetchPokemons(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

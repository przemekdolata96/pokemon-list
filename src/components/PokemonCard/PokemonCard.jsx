import React, { Component } from 'react'
import './PokemonCard.scss';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  image: PropTypes.string,
  pokemonType: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  name: '',
  number: '',
  image: '',
  pokemonType: [],
};


/* const PokemonCard = (props) => {
  const {
    image,
    number,
    name,
    pokemonType,
  } = { ...props };
  return (
    <div className="pokemon-card-container">
      <div className="image-container">
        <img src={image} alt="Pokemon" />
      </div>
      <span>{`#${number} ${name}`}</span>
      <div className="type-container">
        {
          pokemonType.map(type => <div key={type} className={`type ${type}`}>{type}</div>)
        }
      </div>
      <div className="full-container">
        
      </div>
    </div>
  );
}; */


export default class PokemonCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  toogleModal = () => {
    this.setState({
      modalOpen: !this.modalOpen
    })
  }

  render() {
    const {
      image,
      number,
      name,
      pokemonType,
    } = { ...this.props };

    return (
      <div className="pokemon-card-container" onClick={this.toogleModal}>
        <div className="image-container">
          <img src={this.props.image} alt="Pokemon" />
        </div>
        <span>{`#${number} ${name}`}</span>
        <div className="type-container">
          {
            pokemonType.map(type => <div key={type} className={`type ${type}`}>{type}</div>)
          }
        </div>
        {this.modalOpen &&
          <div className="full-container">
          </div>
        }
      </div>
    )
  }
}



PokemonCard.propTypes = propTypes;
PokemonCard.defaultProps = defaultProps;

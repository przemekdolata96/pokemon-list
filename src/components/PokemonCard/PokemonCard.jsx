import React, { Component } from 'react';
import './PokemonCard.scss';
import PropTypes from 'prop-types';

const propTypes = {
  pokemon: PropTypes.shape({}),
};

const defaultProps = {
  pokemon: {},
};
export default class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  toogleModal = () => {
    const { modalOpen } = { ...this.state };
    this.setState({
      modalOpen: !modalOpen,
    });
  }

  render() {
    const { pokemon } = { ...this.props };
    const { modalOpen } = { ...this.state };

    return (
      <div role="button" tabIndex={-1} className="pokemon-card-container" onClick={this.toogleModal} onKeyDown={this.toogleModal}>
        <div className="image-container">
          <img src={pokemon.img} alt="Pokemon" />
        </div>
        <span>{`#${pokemon.num} ${pokemon.name}`}</span>
        <div className="type-container">
          {
            pokemon.type.map(type => <div key={type} className={`type ${type}`}>{type}</div>)
          }
        </div>
        {modalOpen && (
          <div role="button" tabIndex={-2} className="full-container" onClick={this.toogleModal} onKeyDown={this.toogleModal}>
            <div className="modal">
              <div className="image-container">
                <img src={pokemon.img} alt="Pokemon" />
              </div>
              <span>{`#${pokemon.num} ${pokemon.name}`}</span>
              <div className="type-container">
                {
                  pokemon.type
                    .map(type => <div key={type} className={`type ${type}`}>{type}</div>)
                }
              </div>
              <span>Weaknesses:</span>
              <div className="type-container">
                {
                  pokemon.weaknesses
                    .map(type => <div key={type} className={`type ${type}`}>{type}</div>)
                }
              </div>
              {('prev_evolution' in pokemon) && (
                <div>
                  <span>Prev Evolutions:</span>
                  <div className="type-container">
                    {
                      pokemon.prev_evolution
                        .map(evolution => <span key={evolution.name}>{evolution.name}</span>)
                    }
                  </div>
                </div>
              )}
              {('next_evolution' in pokemon) && (
                <div>
                  <span>Next Evolutions:</span>
                  <div className="type-container">
                    {
                      pokemon.next_evolution
                        .map(evolution => <span key={evolution.name}>{evolution.name}</span>)
                    }
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

PokemonCard.propTypes = propTypes;
PokemonCard.defaultProps = defaultProps;

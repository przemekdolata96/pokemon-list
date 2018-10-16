import axios from 'axios';

export function fetchPokemons() {
  return (dispatch) => {
    axios.get('http://localhost:3000/pokemons')
      .then((response) => {
        dispatch({
          type: 'FETCH_POKEMONS_FULFILLED',
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_POKEMONS_REJECTED',
          payload: err,
        });
      });
  };
}

import axios from 'axios';

export default function fetchPokemons(currentPage) {
  return (dispatch) => {
    axios.get(`http://localhost:4000/pokemons?_page=${currentPage}&_limit=20`)
      .then((response) => {
        dispatch({
          type: 'FETCH_POKEMONS_FULFILLED',
          payload: {
            pokemons: response.data,
            currPage: currentPage,
          },
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

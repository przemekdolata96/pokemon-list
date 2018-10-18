export default function reducer(state = {
  pokemons: [],
  pokemonsFetched: false,
  currentPage: 1,
  maxPages: 8,
}, action) {
  switch (action.type) {
    case 'FETCH_POKEMONS': {
      return {
        ...state,
        pokemonsFetched: false,
      };
    }

    case 'FETCH_POKEMONS_FULFILLED': {
      return {
        ...state,
        pokemons: action.payload.pokemons,
        pokemonsFetched: true,
        currentPage: action.payload.currPage,
      };
    }

    case 'FETCH_POKEMONS_REJECTED': {
      return {
        ...state,
        pokemonsFetched: false,
      };
    }
    default:
      break;
  }
  return state;
}

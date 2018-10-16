export default function reducer(state = {
  pokemons: ['fff'],
}, action) {
  switch (action.type) {
    case 'FETCH_POKEMONS': {
      return { ...state };
    }

    case 'FETCH_POKEMONS_FULFILLED': {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    default:
      break;
  }
  return state;
}

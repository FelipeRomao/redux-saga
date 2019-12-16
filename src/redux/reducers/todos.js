const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, { id: Math.random(), text: action.text }]
      };

    default:
      return state;
  }
};

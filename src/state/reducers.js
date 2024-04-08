// reducers.js
const initialState = {
    selectedItem: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_ITEM':
        return {
          ...state,
          selectedItem: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
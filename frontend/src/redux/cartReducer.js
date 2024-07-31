const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
      case 'REMOVE_FROM_CART':
        return state.filter((item) => item._id !== action.payload);
      case 'ADJUST_QUANTITY':
        return state.map((item) =>
          item._id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      default:
        return state;
    }
  };
  
  export default cartReducer;
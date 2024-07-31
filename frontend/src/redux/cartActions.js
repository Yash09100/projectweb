export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  
  export const adjustQuantity = (productId, quantity) => ({
    type: 'ADJUST_QUANTITY',
    payload: { productId, quantity },
  });
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_UPDATE":
      return { ...state, products: action.data };
    case "ADD_TO_CART":
      const isItemPresentInCart = state.cart.some(
        (prodId) => prodId.id === action.data.id
      );
      if (!isItemPresentInCart) {
        return { ...state, cart: [...state.cart, action.data] };
      }
      return state;
    case "REMOVE_ITEM_FROM_CART":
      const filteredCart = state.cart.filter(
        (item) => action.data.id === item.id?item.qty=action.data.qty:item.qty
      );
      return { ...state, cart: filteredCart };
    default:
      return state;
  }
};

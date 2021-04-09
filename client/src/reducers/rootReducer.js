import { v4 as uuid } from "uuid";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        basket: action.items,
      };
    case "ADD_ITEM":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        basket: state.basket.filter((item) => item._id !== action.item),
      };
    case "ITEMS_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

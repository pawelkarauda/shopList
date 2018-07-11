import { GET_SHOPLIST, ADD_ELEMENT } from "../actions/types";

const initialState = {
  shopList: [],
  shopListItem: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOPLIST:
      return {
        ...state,
        shopList: action.payload
      };
    case ADD_ELEMENT:
      return {
        ...state,
        shopList: [action.payload, ...state.shopList]
      };
    default:
      return state;
  }
}

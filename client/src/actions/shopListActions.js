import axios from "axios";

import { GET_SHOPLIST, ADD_ELEMENT, DELETE_ELEMENT } from "../actions/types";

export const getShopList = () => dispatch => {
  axios
    .get("/api/buys")
    .then(res =>
      dispatch({
        type: GET_SHOPLIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SHOPLIST,
        payload: null
      })
    );
};

export const addElement = name => dispatch => {
  axios.post("api/buys/add", name).then(res =>
    dispatch({
      type: ADD_ELEMENT,
      payload: res.data
    })
  );
};

export const deleteElement = id => dispatch => {
  axios.delete(`/api/buys/${id}`);
};

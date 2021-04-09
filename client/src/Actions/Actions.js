import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch({
    type: "ITEMS_LOADING",
  });
  axios.get("/api/items").then((res) => {
    dispatch({
      type: "GET_ITEMS",
      items: res.data,
    });
  });
};

import { types } from "./types";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export const fetchPostAction = () => {
  return async dispatch => {
    await axios
      .get(`${URL}/posts`)
      .then(response => {
        dispatch({ type: types.GET_POSTS, payload: response.data });
      })
      .catch(err => {});
  };
};

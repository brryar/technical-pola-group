import { FETCH_PHONES } from "./actionType";
const baseURL = "http://localhost:3001/";

export const fetchPhones = () => {
  return (dispatch, getState) => {
    fetch(`${baseURL}/phones`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: FETCH_PHONES,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

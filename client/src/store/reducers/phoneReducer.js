import { FETCH_PHONES, FETCH_PHONEBYID } from "../actions/actionType";

const initialState = {
  phones: [],
  phone: null,
};

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES:
      return {
        ...state,
        phones: action.payload,
      };
    case FETCH_PHONEBYID:
      return {
        ...state,
        phone: action.payload,
      };
    default:
      return state;
  }
};

export default phoneReducer;

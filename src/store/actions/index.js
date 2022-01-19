import { GET_ALL_GUEST, SET_GUESTS } from "../constants";

export const getAllGuest = () => {
  return {
    type: GET_ALL_GUEST,
  };
};

export const setGuests = (guests) => {
  return {
    type: SET_GUESTS,
    guests,
  };
};

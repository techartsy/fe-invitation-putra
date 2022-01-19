import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGuest } from "../store/actions";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllGuest());
  }, []);

  return <div>Home Page</div>;
};

export default Homepage;

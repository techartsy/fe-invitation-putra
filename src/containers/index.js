import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGuest } from "../store/actions";

const Homepage = () => {
  const dispatch = useDispatch();
  // reasign tab bar title
  document.title = "cobaa ya";
  useEffect(() => {
    dispatch(getAllGuest());
  }, []);

  return <div>Home Page</div>;
};

export default Homepage;

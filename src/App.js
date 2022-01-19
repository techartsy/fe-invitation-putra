import React, { useEffect } from "react";
import Homepage from "./containers/index";
import { useDispatch } from "react-redux";
import { getAllGuest } from "./store/actions";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGuest());
  }, []);
  return <Homepage />;
};

export default App;

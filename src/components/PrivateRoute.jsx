import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function PrivateRoute(props) {
  let { login } = useAuth();
  if (!login) {
    setTimeout(() => {
      document.querySelector(".res").style.display = "flex";
    }, 0);
    return (
      <Route>
        <Redirect to="/" />;
      </Route>
    );
  }
  return <Route {...props} />;
}
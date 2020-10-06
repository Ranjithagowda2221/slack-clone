import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import Slack from "./slack.png";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={Slack} alt="slack" />
        <h1>Sign in</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;

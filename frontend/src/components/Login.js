import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Login.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
        <button onClick={() => loginWithRedirect()}>Log In</button>;
    </div>
  )
};

export default LoginButton;
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Login.css';
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container">
        <button className="log_button" onClick={() => loginWithRedirect()}>
          <LoginIcon />
        </button>
    </div>
  )
};

export default LoginButton;
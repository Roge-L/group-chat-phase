import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Login.css';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="log">
        <button className='log_button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            <LogoutIcon />
        </button>
    </div>
  );
};

export default LogoutButton;
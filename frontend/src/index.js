import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react"

// require('dotenv').config()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    // domain={process.env.AUTH0_DOMAIN}
    // clientId={process.env.AUTH0_CLIENTID}
    domain="dev-ery2fagxysbwaa1t.us.auth0.com"
    clientId="4G57Gc2A5a0lpUq54BL2nl40cQqLk7Sy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
        <React.StrictMode>
            <App />
        </React.StrictMode>,
  </Auth0Provider>
);

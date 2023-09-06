//import { useContext, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode';

import { CONSTANTS } from "../../config/services-constant";
import BtnFacebookLogin from "./BtnFacebookLogin";

export const BtnGoogleLogin = () => {
  return (
    <GoogleOAuthProvider clientId={CONSTANTS.GOOGLE_CLIENT}>
      <GoogleLogin
        onSuccess={({ credential }) => {
          const result = jwt_decode(credential);
          console.log(result);
          //cookiePolicy = { 'single_host_policy' };
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />;
      <BtnFacebookLogin />
    </GoogleOAuthProvider>
  );
};

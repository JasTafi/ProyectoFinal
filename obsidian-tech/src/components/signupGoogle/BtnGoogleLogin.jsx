import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode';

import { CONSTANTS } from "../../config/services_constant";

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
      />
    </GoogleOAuthProvider>
  );
};

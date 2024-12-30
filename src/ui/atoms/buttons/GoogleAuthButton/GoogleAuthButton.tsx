import React from "react";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useSignInPage } from "../../../../utils/hooks/useSignInPage";

interface GoogleAuthButtonProps{}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ()=>{

    let {
        googleAuthHandler
    } = useSignInPage()

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            console.log(response);
            const response1 = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${response.access_token}`,
            },
            });

            const userInfo = await response1.json();
            console.log(userInfo);
            googleAuthHandler(userInfo);
        },
        onError: (error) => console.log('Login Failed:', error),
        scope: 'openid email profile', // Ensuring you request ID token
        flow: 'implicit',
    });
    return(
        <button
        className="w-full h-fit py-2 bg-white border rounded-3xl flex justify-center text-xs mt-1 mb-1 tablet:text-sm"
        onClick={() => login()}>
            <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="" 
            className="mr-1 w-4 h-4 tablet:w-6 tablet:h-6"/>
            Continue with Google
        </button>
    )
}

export default GoogleAuthButton
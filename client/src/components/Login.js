import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';


const Login = () => {

    const clientId = '858278604987-61i0d53ovs8qp74b6vdulqhhch9mhikn.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientID: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient)
    })

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };



    return ( 
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
        </div>
    );
}

export default Login;
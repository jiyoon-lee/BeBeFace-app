import React from 'react';
import AuthForm from '../components/AuthForm';
import {ImageBackground} from 'react-native';

function LoginScreen() {
  return (
    <>
      <ImageBackground
        source={require('../assets/login.png')}
        style={{height: 230, zIndex: -1}}
        resizeMode="contain"
      />
      <AuthForm />
    </>
  );
}

export default LoginScreen;

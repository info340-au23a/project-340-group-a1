import React from 'react';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const SignInPage = ({ setUser }) => {
  const handleUserChange = (user) => {
    // Handle the user change logic here, e.g., set user in the state
    setUser(user);
  };

  return (
    <div>
        <h1>Login</h1>
        <main>
          <StyledFirebaseAuth firebaseAuth={getAuth()} uiConfig={firebaseUIConfig} />
        </main>
     </div>
  );
};

export default SignInPage;

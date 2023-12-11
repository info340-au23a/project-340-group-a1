import React from 'react';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    }
  }
};

export default function SignInPage(props) {
  const { currentUser, setUser } = props;

  return (
    <div>
        <h1>Login</h1>
        <main>
          <StyledFirebaseAuth firebaseAuth={getAuth()} uiConfig={firebaseUIConfig} />
        </main>
     </div>
  );
};

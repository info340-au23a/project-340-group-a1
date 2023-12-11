import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, EmailAuthProvider, onAuthStateChanged } from 'firebase/auth';
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
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, [setUser]);

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

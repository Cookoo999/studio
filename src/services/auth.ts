import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, type AuthError } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    // This error is thrown when the user closes the popup, so we can safely ignore it.
    if ((error as AuthError).code === 'auth/popup-closed-by-user') {
      return null;
    }
    console.error("Error signing in with Google: ", error);
    return null;
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

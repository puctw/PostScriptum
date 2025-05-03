import React, { useState, useEffect, createContext } from "react";
import { auth } from "../../firebase/firebase.jsx";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}   

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializedUser);
    return unsubscribe;
  }, []);

  async function initializedUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }
  const signOutUser = async () => {
    await signOut(auth); // uses Firebase's signOut directly
  };
  const value = {
     
    currentUser,
    userLoggedIn,
    loading,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

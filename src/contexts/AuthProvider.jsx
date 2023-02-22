import { createContext, useEffect, useState } from "react";
import { getUserDataSession } from "../utils/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      const authUser = getUserDataSession();
      if (!authUser) {
        setLoading(false);
        return
      }

      setLoading(false);
      setAuth(authUser);
    }
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        auth,
        loading,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>);
};

export { AuthProvider };

export default AuthContext;

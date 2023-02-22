import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { useFetch } from "../hooks/useFetch";
import { setUserDataSession } from "../utils/auth";

const LoginPage = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [url, setUrl] = useState("");
  const { data } = useFetch(url);

  useEffect(() => {
    const signIn = (userData) => {
      setAuth(userData);
      setUserDataSession(userData);
      navigate("/");
    };

    if (data) {
      signIn(data);
    }
  }, [data]);

  const onSuccess = (response) => {
    setErrorMessage(null);
    const accessToken = response.access_token;
    const url = `${import.meta.env.VITE_GOOGLE_USER_INFO_URL}${accessToken}`;
    setUrl(url);
  };

  const onError = () => setErrorMessage("Lo sentimos, hubo un error");

  const login = useGoogleLogin({
    onSuccess: onSuccess,
    onError: onError,
  });

  return (
    <>
      {auth ? (
        <Navigate to="/" />
      ) : (
        <LoginForm error={errorMessage} onGoogleLogin={login} />
      )}
    </>
  );
};

export default LoginPage;

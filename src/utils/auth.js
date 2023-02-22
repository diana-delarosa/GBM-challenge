export const setUserDataSession = (user) => {
  localStorage.setItem("auth", JSON.stringify(user));
};

export const getUserDataSession = () => {
  const session_data = localStorage.getItem("auth");

  if (session_data) {
    return JSON.parse(session_data);
  }

  return null;
};

export const removeUserDataSession = () => {
  return localStorage.removeItem("auth");
};

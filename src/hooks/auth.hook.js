import { useState, useEffect, useCallback } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const login = useCallback((jwtToken, id, userEmail) => {
    setToken(jwtToken);
    setUserId(id);
    setUserEmail(userEmail);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: id,
        token: jwtToken,
        email: userEmail,
      })
    );
  }, []);

  const logout = () => {
    setToken(null);
    setUserId(null);
    setUserEmail(null);
    localStorage.removeItem("userData");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token) {
      login(data.token, data.userId, data.email);
    }

    setIsReady(true);
  }, [login]);

  return { login, logout, token, userId, isReady, userEmail };
};

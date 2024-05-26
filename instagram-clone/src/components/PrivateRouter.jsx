// src/components/PrivateRouter.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  // Kullanıcı kimlik doğrulaması yapıldıysa, çocuk bileşenleri render edin
  if (user) {
    return <>{children}</>;
  }

  // Kullanıcı kimlik doğrulaması yapılmadıysa, giriş yapma sayfasına yönlendirin
  return (
    <Navigate
      to="/auth/login"
      replace={true}
      state={{ return_url: location.pathname }}
    />
  );
};

export default PrivateRouter;

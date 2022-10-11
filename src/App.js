import React, { useEffect } from "react";
import Header from "./components/Header";
import { UserInfo } from "./services/user";
import { loginUrl } from "./spotify";
import { Session, User } from "./store";

export default function App() {
  const token = Session((state) => state.session);
  const addSession = Session((state) => state.addSession);
  const userinfo2 = User((state) => state.setUser);

  useEffect(() => {
    //User token'ı localStorage içine kaydettiğimiz alan.
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    addSession(token);
    userinfo2()
  }, [token]);


  return (
    <>
      {!token ? (
        <div className="Login">
          <a className="LoginBtn" href={loginUrl}>
            Giriş yap
          </a>
        </div>
      ) : (
        <div className="mybody"><Header/></div>
      )}
    </>
  );
}

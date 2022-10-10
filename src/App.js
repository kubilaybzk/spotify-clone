import React, { useEffect } from "react";
import { loginUrl } from "./spotify";
import Session from "./store";
import { UserInfo } from "./services/user";


export default function App() {
  
  const token = Session((state) => state.session);
  const addSession = Session((state) => state.addSession);

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
  }, [token]);

  useEffect(()=>{
    UserInfo().then(res=>console.log(res))
  },[])


  return (
    <>
      {!token ? (
        <div className="Login">
          <a className="LoginBtn" href={loginUrl}>
            Giriş yap
          </a>
        </div>
      ) : (
        <div>Selam</div>
      )}
    </>
  );
}

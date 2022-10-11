import { Session } from "../store";
import { post, get } from "./index";

let header = () => {
  let token = window.localStorage.getItem("token");
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

export const UserInfo = async () =>
  await get("https://api.spotify.com/v1/me", header());

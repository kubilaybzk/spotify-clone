import { post, get } from "./index";

let header = () => {
  let token = window.localStorage.getItem("token");
  return {
    params: {
      market: "ES",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
};

export const currentlyPlayingInfo = async () =>
  await get("https://api.spotify.com/v1/me/player/currently-playing", header());

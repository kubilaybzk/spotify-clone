import { post, get } from "./index";

let header = () => {
  let token = window.localStorage.getItem("token");
  return {
    params: {
      market: "TR",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
};

export const NewReleasesAlbumsInfo = async () =>
  await get("https://api.spotify.com/v1/browse/new-releases", header());

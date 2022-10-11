import { post, get } from "./index";

let header = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer BQApwyCxDq5XmYPHXfm8yq88MAMVTQYTS5R8wPeTn9icicDmUVPSzPATFnyzCTWWH7XxKseCHPHs_aEjZEPHdPb76PkB1k86D7Z0o2gRp__7jC84vHsul_H-ar60Tpxn6-5BobKi6r8iIa-puISoflQQ199ko3ogM4a6ZHUnITB9DEosok7E5MueEqYJ8RePsezStMM",
  },
};

export const UserInfo = async() => await get("https://api.spotify.com/v1/me", header);

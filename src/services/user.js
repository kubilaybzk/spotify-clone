import { post, get } from "./index";

let header = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer BQAhWyQRNsuGJ5-WyUpdD5EeopNm2xogbLCRPYoH15MLGrzoP7Rwqivgq0Q4is5eeQo6vIMMy5qiteEx4vgHVoIDGFuAr7-ULnq5-2YnBnNnDC_P9x-rvnZGPKFfQIMlr8Bu9C8w4LY9RXWSChFpIibhSDHmzTJRaBRykra5IqcDgi43B7J8jgL6VaVTNOIWHM6kbpc",
  },
};

export const UserInfo = () => get("https://api.spotify.com/v1/me", header);

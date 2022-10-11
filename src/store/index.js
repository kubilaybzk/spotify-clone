import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { currentlyPlayingInfo } from "../services/player";
import { UserInfo } from "../services/user";

const SessionStore = (set) => ({
  session: null,
  addSession: (x) => set((state) => ({ session: x })),
});

const UserStore = (set) => ({
  user: null,
  setUser: async(x) => {
    let Data = await UserInfo();
    set((state) => ({ user: Data }));
  },
});

const currentlyPlayingStore = (set) => ({
  playing: null,
  setPlaying: async(x) => {
    let Data = await currentlyPlayingInfo();
    set((state) => ({ playing: Data }));
  },
});




const Session = create(devtools(SessionStore));
const User = create(devtools(UserStore));
const currentlyPlaying = create(devtools(currentlyPlayingStore));

export { Session, User,currentlyPlaying };

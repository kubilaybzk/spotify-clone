import create from "zustand";
import { devtools, persist } from "zustand/middleware";
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

const Session = create(devtools(SessionStore));

const User = create(devtools(UserStore));

export { Session, User };

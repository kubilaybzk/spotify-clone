import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const SessionStore=(set)=>({
    session:null,
    addSession: (x) => (set((state) => ({session:x}))),
})

const Session=create(devtools(SessionStore))


export default Session
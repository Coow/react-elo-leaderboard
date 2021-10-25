import { createContext } from "react";

export const AppContext = createContext({
    lang: 'en',
    theme: 'dark',
    player1: {},
    setPlayer1: () => {},
    player2: {},
})


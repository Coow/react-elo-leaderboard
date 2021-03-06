import React from "react";
import { createState, useState } from '@hookstate/core';


import "./App.css";

import { Route, Router, BrowserRouter } from "react-router-dom";

import { Home } from './Pages/Home'
import { Game } from './Pages/Game'
import { NewUser } from "./Pages/NewUser";
import { MatchHistory } from './Pages/MatchHistory'

import { Header } from "./Components/Header";

function App() {

  document.body.classList.add('bg-gray-800');
  document.body.classList.add('text-white');

  return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/matchHistory" component={MatchHistory} />
        <Route path="/newUser" component={NewUser} />
      </BrowserRouter>
  )
}

export default App;

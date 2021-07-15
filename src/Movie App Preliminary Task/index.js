import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Add from "./components/Add";
import Header from "./components/Header";
import WatchedPage from "./components/Watchedpage";
import Watchlist from "./components/WatchList";
import "./style.css";
import "./lib/font-awesome/css/all.min.css";

import GlobalProvider from "./context/GlobalState";

export default function MovieAppPT() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <WatchedPage />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

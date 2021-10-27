import React from "react";
import Menu from "./page/Menu";
import CreateMenu from "./page/CreateMenu";
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/CreateMenu">
        <CreateMenu />
      </Route>
      <Route path="/">
        <Menu />
      </Route>
    </Switch>
  );
}

export default App;

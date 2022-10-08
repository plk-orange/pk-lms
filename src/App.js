import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { PlayerCard, TablePK } from "./components";
import NavBar from "./components/navbar";

import routies from "./pages";
import useFetchAll from "./utils/hooks/useFetchAll";

function App() {
  const routes = useRoutes(routies);

  return (
    <div className="container mx-auto">
      <NavBar />
      <button onClick={() => console.log()}>okok</button>
      
      {routes}
    </div>
  );
}

export default App;

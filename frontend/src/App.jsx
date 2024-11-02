import React from "react";
import { Outlet } from "react-router-dom";
import WelcomePage from "./pages/welcome-page/WelcomePage";

const App = () => {
  return (
    <div>
      <Outlet /> {/* This renders child routes */}
    </div>
    // <WelcomePage />
  );
};

export default App;

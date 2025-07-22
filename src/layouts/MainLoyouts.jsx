import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLoyouts = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLoyouts;

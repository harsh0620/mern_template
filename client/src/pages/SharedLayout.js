import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <Outlet />
        </main>
      </Wrapper>
    </>
  );
};
export default SharedLayout;

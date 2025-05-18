import React from "react";
import ProtoTypes from "prop-types";
import Header from "../Header";
import Footer from "../homeOne/Footer";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Outlet />
        {children}
      </main>
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: ProtoTypes.node,
};
export default Layout;

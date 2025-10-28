import React from "react";
import HeaderHome from "../Header/HeaderHome";

import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderHome />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

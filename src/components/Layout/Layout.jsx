import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

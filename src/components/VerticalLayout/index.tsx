import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: any;
}
const Layout = (props: LayoutProps) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header />
        <Sidebar type={"condensed"} isMobile={isMobile} />
        <div className="main-content">
          {props.children}
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;

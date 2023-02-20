import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutContainer } from "../styles/Layout.styled";

const Layout = () => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth";
import { LayoutContainer } from "../styles/Layout.styled";
import { Spinner } from "../styles/Spinner.styled";

const Layout = () => {
  const { auth, loading } = useAuth();

  return (
    <>
      <Header />
      <LayoutContainer center={loading || !auth}>
        {loading ? <Spinner /> : <Outlet />}
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;

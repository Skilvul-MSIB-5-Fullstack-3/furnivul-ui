import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>outlet</div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import UpcomingProject from "./UpcomingProject";
import ScrollBar from "../ui/ScrollBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const shouldShowProject = location.pathname !== "/get-in-touch"; // Hide project section on get in touch page
  return (
    <>
      <ScrollBar position="top" />
      <Header />
      <Navbar />
      <main className="min-h-[calc(100vh-52px)]">{children}</main>
      {shouldShowProject && <UpcomingProject />}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;

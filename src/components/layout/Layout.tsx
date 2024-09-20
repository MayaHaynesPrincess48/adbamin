import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import UpcomingProject from "./UpcomingProject";
import ScrollBar from "../ui/ScrollBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollBar position="top" />
      <Header />
      <Navbar />
      <main className="min-h-[calc(100vh-52px)]">{children}</main>
      <UpcomingProject />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;

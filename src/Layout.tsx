import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import UpcomingProject from "./components/UpcomingProject";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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

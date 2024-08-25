import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import ScrollToTopButton from "./ui/ScrollToTopButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="min-h-[calc(100vh-52px)]">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;

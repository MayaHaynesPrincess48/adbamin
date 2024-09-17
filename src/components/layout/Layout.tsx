import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import UpcomingProject from "./UpcomingProject";
import ScrollBar from "../ui/ScrollBar";
import AnimatedSection from "./AnimatedSection";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollBar position="top" />
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <Navbar />
      <main className="min-h-[calc(100vh-52px)]">{children}</main>
      <AnimatedSection>
        <UpcomingProject />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
      <AnimatedSection>
        <ScrollToTopButton />
      </AnimatedSection>
    </>
  );
};

export default Layout;

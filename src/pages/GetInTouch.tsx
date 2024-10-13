import SEO from "../components/layout/SEO";
import getInTouchImage from "../assets/images/contact-us.webp";
import Hero from "../components/layout/Hero";
import ContactForm from "../components/common/ContactForm";
import ContactDetails from "../components/common/ContactDetails";
import AnimatedSection from "@/components/layout/AnimatedSection";

const GetInTouch: React.FC = () => {
  return (
    <>
      <SEO
        title="Get In Touch"
        description="Contact Abdamin International Limited - We're here to assist you with our products and services"
        keywords={["contact", "get in touch", "support", "customer service"]}
        ogUrl="https://www.abdamin.com/get-in-touch"
      />
      {/* Get In Touch page content */}
      <Hero
        title="Get In Touch With Us!"
        subtitle="Feel free to reach us via email or phone, or visit any of our locations in Adamawa, Abuja, Lagos, and Kaduna. We are available to help you."
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={getInTouchImage}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover bg-center md:h-[650px]"
      />
      <AnimatedSection>
        <section className="mx-auto flex max-w-8xl flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
            <ContactDetails className="order-2" />
            <ContactForm className="order-1" />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default GetInTouch;

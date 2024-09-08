import SEO from "../components/SEO";
import getInTouchImage from "../assets/images/contact-us.webp";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
// import ContactDetails from "../components/ContactDetails";

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
        // subtitleClassName="bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent"
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={getInTouchImage}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover bg-center md:h-[650px]"
      />
      <section className="mx-auto flex max-w-8xl flex-col gap-16 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ContactForm />
          {/* <ContactDetails /> */}
        </div>
      </section>
    </>
  );
};

export default GetInTouch;

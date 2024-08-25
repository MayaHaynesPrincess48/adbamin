import { NavLink } from "react-router-dom";

type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  link?: string;
  className?: string;
  linkClassName?: string;
  text?: string;
};

const Hero = ({ title, ...props }: HeroProps) => {
  return (
    <>
      <section
        className={`${props.className} -translate-y-[85px] bg-cover text-neutral-base md:top-[52px]`}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-32 sm:gap-8 sm:px-6 sm:py-36 md:py-40 lg:px-8">
          <h1 className="text-3xl font-bold tracking-wide sm:text-4xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-md max-w-5xl md:text-xl">{props.subtitle}</p>
          <NavLink
            className={`${props.linkClassName} btn btn-primary w-fit`}
            to={props.link ?? ""}
          >
            {props.text}
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Hero;

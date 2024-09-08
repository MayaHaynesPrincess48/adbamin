import { NavLink } from "react-router-dom";
import ScrollToBottomButton from "./ui/ScrollToBottom";
import clsx from "clsx";

type HeroProps = {
  title: string;
  subtitle?: string;
  subtitleClassName?: string;
  backgroundImage: string;
  link?: string;
  className?: string;
  linkClassName?: string;
  text?: string;
  titleClassName?: string;
};

const Hero = ({ title, ...props }: HeroProps) => {
  return (
    <>
      <section
        className={clsx(
          props.className,
          "-translate-y-[85px] bg-cover text-neutral-base md:top-[52px]",
        )}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      >
        <div className="relative mx-auto flex max-w-8xl flex-col gap-6 px-4 py-32 sm:gap-8 sm:px-6 sm:py-36 md:py-40 lg:px-8">
          <h1
            className={clsx(
              "text-3xl font-bold tracking-wide sm:text-4xl lg:text-6xl",
              props.titleClassName,
            )}
          >
            {title}
          </h1>
          <p
            className={clsx(
              "text-md max-w-5xl md:text-xl",
              props.subtitleClassName,
            )}
          >
            {props.subtitle}
          </p>
          <NavLink
            className={clsx(props.linkClassName, "btn btn-primary w-fit")}
            to={props.link ?? ""}
          >
            {props.text}
          </NavLink>
          <ScrollToBottomButton />
        </div>
      </section>
    </>
  );
};

export default Hero;

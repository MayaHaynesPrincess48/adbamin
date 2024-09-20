import { NavLink } from "react-router-dom";
import ScrollToBottomButton from "../ui/ScrollToBottom";
import clsx from "clsx";
import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

type HeroProps = {
  title?: string;
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
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = props.backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, [props.backgroundImage]);

  return (
    <AnimatedSection>
      <section
        className={clsx(
          props.className,
          "-translate-y-[85px] bg-cover text-neutral-base md:top-[52px]",
          "overflow-hidden", // Added to contain the animated placeholder
        )}
        style={{
          backgroundImage: imageLoaded
            ? `url(${props.backgroundImage})`
            : "none",
        }}
        role="banner"
        aria-label="Hero section"
      >
        {!imageLoaded && (
          <div
            className="absolute inset-0 animate-gradient-x bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"
            aria-hidden="true"
          />
        )}
        <div className="relative mx-auto flex max-w-8xl flex-col gap-6 px-4 py-32 sm:px-6 sm:py-36 md:py-40 lg:px-8">
          <h1
            className={clsx(
              "text-3xl font-bold tracking-wide sm:text-4xl lg:text-6xl",
              props.titleClassName,
            )}
          >
            {title}
          </h1>
          {props.subtitle && (
            <p
              className={clsx(
                "text-md max-w-5xl md:text-xl",
                props.subtitleClassName,
              )}
            >
              {props.subtitle}
            </p>
          )}
          {props.link && props.text && (
            <NavLink
              className={clsx(props.linkClassName, "btn btn-primary w-fit")}
              to={props.link}
              aria-label={`${props.text} - Navigate to ${props.link}`}
            >
              {props.text}
            </NavLink>
          )}
          <ScrollToBottomButton />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Hero;

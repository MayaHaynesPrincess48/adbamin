import clsx from "clsx";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../utils/data";
import AnimatedSection from "../layout/AnimatedSection";

interface ServicesGridProps {
  className?: string;
}

const ServicesGrid = ({ className }: ServicesGridProps) => {
  return (
    <div
      className={clsx("mx-auto", className, {
        "py-[52px] sm:py-[64px] md:py-[72px]": !className,
      })}
    >
      <AnimatedSection>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServicesGrid;

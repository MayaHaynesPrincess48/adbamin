import ServiceCard from "./ServiceCard";
import { servicesData } from "../utils/data";

const ServicesGrid = () => {
  return (
    <div className="mx-auto py-[52px] sm:py-[64px] md:py-[72px]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;

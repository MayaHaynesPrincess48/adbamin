import { Link } from "react-router-dom";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
        role="img"
        aria-label={title}
        title={title}
      />
      <div className="relative flex h-[350px] flex-col justify-end p-6 md:h-[404px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        <h3 className="relative mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="relative mb-4 text-white">{description}</p>
        <div className="relative flex items-center text-white">
          <Link
            to={link}
            className="flex items-center transition-all duration-300 hover:text-[#D02A10]"
          >
            Learn more
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-[32px] w-[32px] transition-transform duration-300 group-hover:translate-x-1"
            >
              <g clipPath="url(#clip0_252_400)">
                <path
                  d="M27.8637 7.19696C28.1566 6.90406 28.1566 6.42919 27.8637 6.1363C27.5708 5.8434 27.0959 5.8434 26.803 6.1363L27.8637 7.19696ZM8.13635 24.803L7.60602 25.3333L8.66668 26.394L9.19701 25.8636L8.13635 24.803ZM26.803 6.1363L8.13635 24.803L9.19701 25.8636L27.8637 7.19696L26.803 6.1363Z"
                  fill="#D02A10"
                />
                <path
                  d="M13.64 6.66663L27.3333 6.66663L27.3333 20.36"
                  stroke="#D02A10"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_252_400">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

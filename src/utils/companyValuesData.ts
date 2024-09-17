import teamwork from "../assets/svg/Teamwork.svg";
import reliability from "../assets/svg/Insignia.svg";
import innovation from "../assets/svg/Problem-solve.svg";
import customerFocus from "../assets/svg/Customer-service.svg";
import peopleDevelopment from "../assets/svg/Man.svg";

export interface Value {
  iconSrc: string;
  title: string;
  description: string;
}

export const valueData: Value[] = [
  {
    iconSrc: teamwork,
    title: "Teamwork",
    description:
      "We foster a collaborative environment where every team member's skills and input are valued.",
  },
  {
    iconSrc: reliability,
    title: "Responsibility and Reliability",
    description:
      "We bring decades of industry experience to every project, ensuring excellence and reliability",
  },
  {
    iconSrc: peopleDevelopment,
    title: "People Development",
    description:
      "We believe that our greatest asset is our people. We are dedicated to nurturing their growth and potential.",
  },
  {
    iconSrc: customerFocus,
    title: "Customer Focus",
    description:
      "We prioritize your needs, offering tailored solutions that align with your goals and exceed expectations",
  },
  {
    iconSrc: innovation,
    title: "Innovation",
    description:
      "Our diverse divisions provide integrated services, delivering seamless results across multiple sectors",
  },
];

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Service = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export type NavInfo = {
  address: string;
  email: string;
  phone: string;
};

export type NavItem = {
  name: string;
  link: string;
};

export type SocialLink = {
  label: string;
  icon: IconDefinition;
  url: string;
};

export type FooterInfo = {
  address: string;
  email: string;
  phone: string;
};

export type ProjectCategory =
  | "Construction"
  | "Transportation"
  | "Telecoms"
  | "Consults"
  | "Solar Generation"
  | "Gauni Water";

export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  service: string;
  category: ProjectCategory;
  imageUrl: string;
}

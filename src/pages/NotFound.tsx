/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Briefcase,
  Truck,
  Radio,
  Users,
  Sun,
  Droplet,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import logo from "../assets/svg/Logo.svg";

const services = [
  { icon: <Briefcase />, name: "Construction" },
  { icon: <Truck />, name: "Transportation" },
  { icon: <Radio />, name: "Telecoms" },
  { icon: <Users />, name: "Consults" },
  { icon: <Sun />, name: "Solar Generation" },
  { icon: <Droplet />, name: "Gauni Water" },
];

const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="Oops! The page you're looking for seems to be missing from our blueprints. Let's get you back on track!"
        keywords={["404", "not found", "error", "Abdamin"]}
        ogUrl="https://www.abdamin.com/404"
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <motion.img
            src={logo}
            alt="Abdamin Logo"
            className="mx-auto mb-8 h-8 lg:h-10"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <motion.h1
            className="mb-4 text-6xl font-bold text-primary-base md:text-8xl"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Oops! This Page is Off the Blueprint
          </motion.h2>
          <motion.p
            className="mb-4 text-lg text-gray-600 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            We couldn't find the page you're looking for. But don't worry, we've
            got plenty of other great services to explore!
          </motion.p>
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {service.icon}
                <span className="ml-2">{service.name}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/"
              className="hover:bg-primary-dark group flex items-center justify-center rounded-full bg-primary-base px-6 py-3 text-white transition-all"
            >
              <Home className="mr-2 h-5 w-5" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center justify-center rounded-full border-2 border-primary-base px-6 py-3 text-primary-base transition-all hover:bg-primary-base hover:text-white"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              <span>View Our Projects</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;

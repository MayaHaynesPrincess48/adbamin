import { FiChevronDown } from "react-icons/fi";
import {
  Building2,
  Truck,
  Radio,
  BrainCircuit,
  Sun,
  Droplets,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useState, useRef } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import useClickOutside from "@/hooks/useClickOutside";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setOpen(false));

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="relative z-40"
      ref={dropdownRef}
    >
      <div className="flex items-center gap-2">
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-base font-semibold ${
              isActive
                ? "text-secondary-base transition-colors duration-300 hover:text-secondary-70"
                : "text-neutral-50 transition-colors duration-300 hover:text-neutral-40"
            }`
          }
        >
          Services
        </NavLink>
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="ml-2 flex items-center gap-2 rounded-md bg-primary-base px-2 py-1 text-white transition-colors duration-300 hover:text-neutral-10"
        >
          <motion.span
            variants={iconVariants}
            animate={open ? "open" : "closed"}
            initial="closed"
          >
            <FiChevronDown />
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="absolute left-[150%] top-[120%] flex w-48 flex-col gap-2 overflow-hidden rounded-lg bg-white/90 p-2 shadow-xl backdrop-blur-lg"
          >
            <Option
              setOpen={setOpen}
              Icon={() => <Building2 />}
              text="Construction"
              link="/services/construction"
            />
            <Option
              setOpen={setOpen}
              Icon={() => <Truck />}
              text="Transportation"
              link="/services/transportation"
            />
            <Option
              setOpen={setOpen}
              Icon={() => <Radio />}
              text="Telecoms"
              link="/services/telecoms"
            />
            <Option
              setOpen={setOpen}
              Icon={() => <BrainCircuit />}
              text="Consults"
              link="/services/consults"
            />
            <Option
              setOpen={setOpen}
              Icon={() => <Sun />}
              text="Solar Generation"
              link="/services/solar-generation"
            />
            <Option
              setOpen={setOpen}
              Icon={() => <Droplets />}
              text="Gauni Water"
              link="/services/gauni-water"
            />
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
  link,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  link: string;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 text-xs font-medium text-primary-base transition-colors"
    >
      <NavLink
        to={link}
        className={({ isActive }) =>
          `flex w-full items-center gap-2 ${
            isActive
              ? "border-b-2 border-secondary-base pb-1 font-bold text-secondary-base"
              : "text-primary-base duration-300 hover:text-secondary-base"
          }`
        }
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </NavLink>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

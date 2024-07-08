import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { id: "hero", text: "Home" },
    { id: "about", text: "About" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed left-0 right-0 top-0 flex justify-center bg-black p-4 text-sm font-semibold text-white"
    >
      <ul className="flex gap-4">
        {links.map((link) => (
          <li
            key={link.id}
            className="cursor-pointer text-[16px] font-medium leading-[21.6px] tracking-[3px] transition-all duration-300 hover:scale-105 hover:tracking-tight hover:text-gray-300"
          >
            <a href={`#${link.id}`}>{link.text}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

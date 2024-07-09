import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="grid h-screen place-items-center bg-gradient-to-br from-black to-gray-900 p-10 text-gray-300">
      <motion.h1
        animate={{ transform: "scale(1.0)", opacity: 1 }}
        transition={{ duration: 2 }}
        className="animate-pulse text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
      >
        Hello, Welcome to{" "}
        <span className="relative inline-block text-sky-700 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-sky-800">
          <span className="relative italic text-gray-300">Abdamin!</span>
        </span>
      </motion.h1>
      <motion.p
        animate={{ transform: "scale(1.0)", opacity: 1 }}
        transition={{ duration: 2 }}
        className="animate-pulse text-center text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        Coming Soon!
      </motion.p>
      <motion.div
        animate={{
          rotate: 360,
          opacity: 1,
          scale: 1.5,
        }}
        transition={{ duration: 2 }}
        className="relative h-0 w-0 animate-pulse border-b-[26px] border-l-[15px] border-r-[15px] border-b-gray-300 border-l-transparent border-r-transparent"
      />
      <motion.p
        animate={{ transform: "scale(1.0)", opacity: 1 }}
        transition={{ duration: 2 }}
        className="smz:text-xl animate-pulse text-center text-lg italic tracking-tight text-sky-700 md:text-2xl"
      >
        Please check back soon and stay tuned for updates!
      </motion.p>
    </div>
  );
};

export default ComingSoon;

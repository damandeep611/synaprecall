import {FaGithub} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-white  transition-all duration-500 ease-in-out ${
        isScrolled
          ? "rounded-xl mx-auto max-w-[70%] my-4 border border-gray-400"
          : "w-full "
      }`}
      initial={false}
      animate={isScrolled ? { y: 0 } : { y: 0 }}
    >
      <motion.div
        className="text-2xl font-bold text-blue-600"
        initial={false}
        animate={isScrolled ? { scale: 0.9 } : { scale: 1 }}
      >
        SynapRecap
      </motion.div>
      <motion.nav className="flex items-center justify-between text-base font-semibold">
        <motion.ul
          className="flex items-center justify-between space-x-4"
          initial={false}
          animate={isScrolled ? { scale: 0.9 } : { scale: 1 }}
        >
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <a href="#">AI</a>
          </li>
          <li>
            <a href="#">Demo</a>
          </li>
        </motion.ul>
      </motion.nav>
      <div className=" flex items-center justify-between gap-4 text-sm font-semibold">
        <button className="bg-black text-white px-4 py-1 rounded-xl">
          Get Started
        </button>
        <button className="border border-black px-4 py-1 flex items-center justify-between gap-2 rounded-xl">
          <FaGithub />
          Star on Github
        </button>
      </div>
    </motion.header>
  );
}
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { MdOutlineBakeryDining } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavbarMenu = [
    { id: 1, title: "Catalogue", link: "/catalogue" },
    { id: 2, title: "Contact Us", link: "/contact" },
    { id: 3, title: "FAQ", link: "/faq" },
  ];

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#2C0703]">
        <div className="container flex justify-between items-center py-4 px-4 md:px-8">
          {/* logo */}
          <div className="text-2xl flex items-center gap-3 font-bold text-white">
            <MdOutlineBakeryDining />
            <a href="/">Alzam B'Cookies</a>
          </div>

          {/* desktop view */}
          <div className="hidden md:flex text-white items-center gap-6">
            {NavbarMenu.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="inline-block py-1 px-3 border-b-2 border-transparent hover:border-white transition"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* hamburger */}
          <div className="md:hidden text-white">
            <button onClick={() => setOpen(!open)}>
              <motion.div
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoMenu className="text-4xl" />
              </motion.div>
            </button>
          </div>
        </div>
      </nav>
      {/* mobile view */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-16 left-0 w-full bg-white text-black shadow-lg rounded-b-lg overflow-hidden z-40"
          >
            <ul className="flex flex-col text-center">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="p-4 border-b hover:bg-gray-200">
                  <a href={item.link} onClick={() => setOpen(false)}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

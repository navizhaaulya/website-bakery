import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { MdOutlineBakeryDining } from "react-icons/md";
import Logo from "../assets/logoR.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavbarMenu = [
    { id: 1, title: "Catalogue", link: "/catalogue" },
    { id: 2, title: "FAQ", link: "/faq" },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex justify-center z-50 px-6 py-4">
        <nav className="w-full max-w-6xl bg-[#2C0703] rounded-full shadow-lg">
          <div className="flex justify-between items-center py-3 px-6">
            {/* logo */}
            <div className="text-2xl flex items-center gap-3 font-bold text-white">
              <img src={Logo} alt="logo" className="w-10" />
              <a href="/" className="text-white no-underline">
                Alzam B'Cookies
              </a>
            </div>

            {/* desktop menu */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 text-white items-center gap-8">
              {NavbarMenu.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="px-4 py-1 rounded-full text-white no-underline hover:bg-white/20 transition"
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
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 left-0 w-full bg-white text-black shadow-lg rounded-b-lg overflow-hidden z-40"
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

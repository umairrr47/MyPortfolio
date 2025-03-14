import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full top-0 z-50 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="relative flex items-center justify-between w-full backdrop-blur-md bg-black/80 py-4 px-6 md:px-8 rounded-full border border-orange/20 shadow-lg shadow-orange/10">
          <NavbarLogo />
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <NavbarLinks />
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`lg:hidden absolute w-full left-0 top-full mt-2 ${menuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={menuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="backdrop-blur-lg bg-black/90 border border-orange/20 rounded-2xl p-6 shadow-xl">
              <NavbarLinks />
            </div>
          </motion.div>

          <div className="flex items-center gap-4">
            <NavbarBtn />
            <div className="lg:hidden">
              <NavbarToggler />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarMain;
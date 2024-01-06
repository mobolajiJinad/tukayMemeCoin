import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { IoMenuOutline, IoClose } from "react-icons/io5";

const navLinks = [
  { id: 0, path: "#about", name: "about" },
  { id: 1, path: "#howToBuy", name: "how to buy" },
  { id: 2, path: "#tokenomics", name: "tokenomics" },
  { id: 3, path: "#roadmap", name: "roadmap" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between bg-transparent px-3 py-4 shadow-lg">
      <h1 className="font-RubikGlitch text-4xl uppercase">tukay</h1>

      <div className="flex items-center justify-between">
        <button className="order-1 mx-4 rounded-2xl bg-[#1109AA] px-5 py-2 font-RubikGlitch text-base uppercase text-black hover:bg-[#331ACC] md:order-2">
          buy now
        </button>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="order-2 md:order-1 md:hidden"
        >
          {menuOpen ? (
            <IoClose className="h-12 w-12 cursor-pointer" />
          ) : (
            <IoMenuOutline className="h-12 w-12 cursor-pointer" />
          )}
        </div>

        <DropDownMenu isOpen={menuOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
};

const DropDownMenu = ({ isOpen, closeMenu }) => {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <div
      style={{
        background: `${
          isOpen
            ? "linear-gradient(to right, #552bee, #331acc, #2211bb, #1109aa)"
            : "transparent"
        }`,
      }}
      className={`absolute left-0 right-0 ${
        isOpen ? "top-20" : "-top-96"
      } z-50 w-full shadow-2xl transition-all duration-500 md:static md:flex md:w-auto md:items-center md:justify-between md:bg-transparent md:shadow-none`}
    >
      {navLinks.map((link) => {
        return (
          <NavHashLink
            smooth
            to={link.path}
            key={link.id}
            className="my-4 block text-center font-RubikGlitch text-lg capitalize tracking-widest text-white hover:text-gray-500 md:mx-2 md:my-0 lg:mx-3"
            onClick={handleClick}
          >
            {link.name}
          </NavHashLink>
        );
      })}
    </div>
  );
};

export default Header;

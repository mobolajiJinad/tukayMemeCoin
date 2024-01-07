import { FaSquareXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mx-auto my-5 mt-28 w-5/6 ">
      <div className="flex w-full items-center">
        <img src={logo} width="45px" height="45px" alt="" />
        <h2 className="mx-5 font-RubikGlitch text-3xl">tukay</h2>
      </div>

      <div className="my-2 flex w-full flex-wrap items-center justify-between md:w-3/4">
        <p className="my-1 text-lg">Get connected with us on social media:</p>
        <div className="flex w-2/5 items-center justify-between md:justify-around">
          <FaSquareXTwitter className="cursor-pointer text-2xl" />
          <FaTelegram className="cursor-pointer text-2xl" />
          <FaDiscord className="cursor-pointer text-2xl" />
        </div>
      </div>

      <div className="w-full">
        Copyright © {new Date().getFullYear()} Abdul Quadri
      </div>
    </footer>
  );
};
export default Footer;

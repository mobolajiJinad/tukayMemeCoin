import { useState, useRef, useEffect } from "react";
import { IoCopy } from "react-icons/io5";

import tukay1 from "../assets/tukay1.png";

const Main = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-50px" },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="my-5 flex min-h-[50%] w-full flex-wrap items-center justify-between px-3 pb-3 md:justify-around lg:mx-auto lg:mt-5 lg:w-5/6"
      ref={ref}
    >
      <div
        className={`order-2 w-full px-2 transition-all duration-200 ease-in md:order-1 md:w-2/3 ${
          isIntersecting ? "translate-x-0" : "-translate-x-[150%]"
        }`}
      >
        <h1 className="font-RubikGlitch text-7xl uppercase italic text-[#1109AA] lg:text-9xl">
          tukay
        </h1>

        <h2 className="font-DMSerif text-2xl font-bold text-white lg:text-4xl">
          The most memeable memecoin
        </h2>

        <p className="my-2 font-DMSerif text-base text-white lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          modi corporis ea, labore voluptatum consequuntur doloribus. Adipisci,
          placeat? Accusamus illum harum sunt quia, quo ipsam. Nulla labore
          ratione sed odit.
        </p>

        <div className="mt-2">
          <h3 className="font-DMSerif text-xl capitalize text-white">
            contract address
          </h3>
          <button className="mt-1 rounded-lg border-2 border-[#1109aacb] bg-[#1109aa41] p-3 text-white">
            Loremipsumdolorsitametcodasdasd{" "}
            <IoCopy className="mx-1 inline-block " />
          </button>
        </div>
      </div>

      <img
        src={tukay1}
        className={`order-1 mx-auto w-full max-w-96 transition-all duration-200 ease-in md:order-2 md:w-1/3  ${
          isIntersecting ? "translate-x-0" : "translate-x-[150%]"
        }`}
        alt=""
      />
    </main>
  );
};

export default Main;

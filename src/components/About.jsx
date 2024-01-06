import { useState, useRef, useEffect } from "react";

import tukay2 from "../assets/tukay2.png";

const About = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="my-2 flex w-full flex-wrap items-center justify-between px-3 pb-3 md:justify-around lg:mx-auto lg:mt-5 lg:w-5/6"
      ref={ref}
    >
      <div
        className={`order-1 w-full px-4 transition-all duration-200 ease-in md:order-2 md:w-2/3 ${
          isIntersecting ? "translate-x-0" : "-translate-x-[150%]"
        }`}
      >
        <h2 className="text-center font-DMSerif text-3xl text-white md:text-5xl">
          What is{" "}
          <span className="font-RubikGlitch text-3xl text-[#1109AA] md:text-5xl">
            tukay?
          </span>
        </h2>

        <p className="my-5 mb-9 px-1 font-DMSerif text-2xl text-white md:bg-white md:text-black">
          An open-source peer-to-peer digital currency, favoured by everyone!
        </p>

        <p className="font-DMSerif text-lg text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          laudantium enim ullam nihil eveniet recusandae sit possimus voluptatem
          tempore pariatur! Officiis nulla amet quos fugiat quisquam deleniti
          vel non ipsam? Placeat soluta unde distinctio quia non expedita, iusto
          consequatur tenetur fugiat adipisci commodi est aperiam debitis autem
          amet, blanditiis sint rem voluptas laboriosam. Doloribus pariatur aut
          deleniti totam a aliquid.
        </p>
      </div>

      <img
        src={tukay2}
        className={`order-2 mx-auto w-full max-w-96 transition-all duration-200 ease-in md:order-1 md:w-1/3 ${
          isIntersecting ? "translate-x-0" : "translate-x-[150%]"
        }`}
        alt=""
      />
    </section>
  );
};

export default About;

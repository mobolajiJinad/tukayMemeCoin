import { useState, useRef, useEffect } from "react";

const Tokenomics = () => {
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
    <setion id="tokenomics">
      <h2 className="my-5 text-center font-DMSerif text-3xl font-bold capitalize text-white md:text-5xl">
        token
        <span className="font-RubikGlitch text-3xl text-[#1109AA] md:text-5xl">
          omics
        </span>
      </h2>

      <div
        className="my-2 flex w-full flex-wrap items-center justify-between px-3 pb-3 md:justify-around lg:mx-auto lg:mt-5 lg:w-5/6"
        ref={ref}
      ></div>
    </setion>
  );
};
export default Tokenomics;

import { useState, useRef, useEffect } from "react";

import tokenomics from "../assets/tokenomics.png";

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
    <section id="tokenomics" className="my-7">
      <h2 className="mb-5 text-center font-DMSerif text-3xl font-bold capitalize  md:text-5xl">
        token
        <span className="font-RubikGlitch text-3xl text-[#1109AA] md:text-5xl">
          omics
        </span>
      </h2>

      <div
        className="my-2 flex h-fit w-full flex-wrap items-center justify-between overflow-y-hidden px-3 pb-3 md:h-80 md:justify-around lg:mx-auto lg:mt-5 lg:w-5/6"
        ref={ref}
      >
        <img
          src={tokenomics}
          className={`mx-auto w-full max-w-[27rem] transition-all duration-200 ease-in md:w-1/2 ${
            isIntersecting ? "translate-y-0" : "-translate-y-[150%]"
          }`}
          alt=""
        />

        <div
          className={`mx-auto w-full max-w-[27rem] px-4 transition-all duration-200 ease-in md:w-1/2  ${
            isIntersecting ? "translate-y-0" : "translate-y-[150%]"
          }`}
        >
          <h3 className="my-3 text-2xl font-bold capitalize ">
            total supply tukay
          </h3>
          <p className="my-2 font-DMSerif text-2xl font-bold ">1,000,000,000</p>

          <div className="mx-auto w-full rounded-2xl border border-[#1109aacb] bg-transparent px-3 pb-5 md:px-5 md:pb-3">
            <h4 className="my-3 font-DMSerif text-2xl capitalize ">
              supply breakdown
            </h4>
            <p className="text-[0.9rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              accusamus. Molestias maxime officiis sint fugiat necessitatibus
              non fugit officia quae, accusantium quisquam similique veniam
              aliquam repudiandae accusamus dolor architecto aperiam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tokenomics;

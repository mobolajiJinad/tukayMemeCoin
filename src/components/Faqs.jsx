import { useState, useRef, useEffect } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const data = [
  {
    title: "How do I particicpate in the presale",
    explanation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum placeat, a repellat incidunt minima voluptates officiis magni molestias! Provident dolorem, nihil sint expedita enim quaerat sed sunt. Cumque, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente soluta iusto fugiat voluptates ut minus quos perferendis laborum nulla ipsam expedita officia distinctio optio commodi amet, perspiciatis iure.",
  },
  {
    title: "Provident dolorem, nihil sint expedita enim",
    explanation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum placeat, a repellat incidunt minima voluptates officiis magni molestias! Provident dolorem, nihil sint expedita enim quaerat sed sunt. Cumque, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente soluta iusto fugiat voluptates ut minus quos perferendis laborum nulla ipsam expedita officia distinctio optio commodi amet, perspiciatis iure.",
  },
  {
    title: "Laborum nulla ipsam expedita officia distinctio",
    explanation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum placeat, a repellat incidunt minima voluptates officiis magni molestias! Provident dolorem, nihil sint expedita enim quaerat sed sunt. Cumque, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente soluta iusto fugiat voluptates ut minus quos perferendis laborum nulla ipsam expedita officia distinctio optio commodi amet, perspiciatis iure.",
  },
  {
    title: "Provident dolorem, nihil sint expedita enim",
    explanation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum placeat, a repellat incidunt minima voluptates officiis magni molestias! Provident dolorem, nihil sint expedita enim quaerat sed sunt. Cumque, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente soluta iusto fugiat voluptates ut minus quos perferendis laborum nulla ipsam expedita officia distinctio optio commodi amet, perspiciatis iure.",
  },
];

const Faqs = () => {
  const [expand, setExpand] = useState(Array(data.length).fill(false));
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

  const handleExpandToggle = (index) => {
    setExpand((prevExpand) => {
      const newExpand = [...prevExpand];
      newExpand[index] = !newExpand[index];
      return newExpand;
    });
  };

  return (
    <section id="faqs" className="my-7" ref={ref}>
      <div className="mb-10 mt-3">
        <h2 className="text-center text-2xl font-bold text-[#552bee]">FAQs</h2>
        <h3 className="my-2 text-center font-RubikGlitch text-4xl capitalize text-white">
          frequently asked <span className="text-[#552bee]">questions</span>
        </h3>
      </div>

      {data.map((datum, index) => {
        return (
          <div
            key={index}
            className={`mx-auto my-6 w-4/5 rounded-2xl border border-[#1109aacb] bg-transparent px-3 py-2 pt-3 transition-all duration-200 ease-in md:col-span-2 md:w-3/4 md:px-5 md:pb-3 ${
              isIntersecting ? "translate-x-0" : "-translate-x-[150%]"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="my-4 text-xl font-bold text-white md:text-2xl">
                {datum.title}
              </h3>

              {expand[index] ? (
                <CiCircleMinus
                  className="cursor-pointer text-5xl font-bold text-white md:text-3xl"
                  onClick={() => handleExpandToggle(index)}
                />
              ) : (
                <CiCirclePlus
                  className="cursor-pointer text-5xl font-bold text-white md:text-3xl"
                  onClick={() => handleExpandToggle(index)}
                />
              )}
            </div>

            {expand[index] && (
              <p className="mb-4 text-base text-white transition-all duration-200 ease-in">
                {datum.explanation}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Faqs;

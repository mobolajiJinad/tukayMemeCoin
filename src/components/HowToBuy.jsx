import logo from "../assets/logo.png";

const data = [
  {
    id: 1,
    topic: "Create MetaMask Wallet",
    paragraph:
      "Ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur nostrum esse quo. Pariatur temporibus consectetur ullam doloribus voluptatibus, voluptate excepturi.",
  },
  {
    id: 2,
    topic: "Send ETH to your wallet",
    paragraph:
      "Ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur nostrum esse quo. Pariatur temporibus consectetur ullam doloribus voluptatibus, voluptate excepturi.",
  },
  {
    id: 3,
    topic: "Connect your wallet",
    paragraph:
      "Ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur nostrum esse quo. Pariatur temporibus consectetur ullam doloribus voluptatibus, voluptate excepturi.",
  },
  {
    id: 4,
    topic: "Swap ETH for TUKAY",
    paragraph:
      "Ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur nostrum esse quo. Pariatur temporibus consectetur ullam doloribus voluptatibus, voluptate excepturi.",
  },
];

const HowToBuy = () => {
  return (
    <section id="howToBuy" className="my-4 px-2">
      <h2 className="my-5 text-center font-DMSerif text-3xl text-white md:text-5xl">
        How to{" "}
        <span className="font-RubikGlitch text-3xl text-[#1109AA] md:text-5xl">
          buy
        </span>
      </h2>

      <div className="mx-auto md:grid md:grid-cols-4 md:grid-rows-3 md:px-5 lg:px-7">
        <img
          src={logo}
          className="hidden md:col-span-3 md:col-start-2 md:row-start-2 md:block"
        />

        {data.map((datum) => {
          return (
            <div
              className={`mx-auto my-6 w-4/5 rounded-2xl border border-[#1109aacb] bg-transparent px-3 pb-5 md:col-span-2 md:w-3/4 md:px-5 md:pb-3`}
              key={datum.id}
            >
              <button className="relative -top-4 left-6 rounded-lg border border-[#1109aacb] bg-[#1109aa] px-2 py-1 font-DMSerif text-base text-white">
                Step {datum.id}
              </button>

              <h4 className="mb-4 text-center text-xl font-bold text-white">
                {datum.topic}
              </h4>

              <p className="text-white">{datum.paragraph}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowToBuy;

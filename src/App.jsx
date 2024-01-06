import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <Main />
      <About />
      <HowToBuy />
      <Tokenomics />
    </div>
  );
};
export default App;

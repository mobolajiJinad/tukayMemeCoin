import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <Main />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Faqs />
      <Footer />
    </div>
  );
};
export default App;

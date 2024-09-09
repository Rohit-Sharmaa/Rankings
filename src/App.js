import Contributer from "./components/contributer/Contributer";
import Header from "./components/header/Header";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Navbar from "./components/navbar/Navbar";
import FAQ from "./components/faq/data";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <HowItWorks />
      <Contributer/>
      <FAQ/>
    </main>
  );
}

export default App;

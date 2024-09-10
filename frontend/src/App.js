import Contributer from "./components/contributer/Contributer";
import Faq from "./components/faq/Faq";
import Header from "./components/header/Header";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <HowItWorks />
      <Contributer/>
       <Faq/>
    </main>
  );
}

export default App;

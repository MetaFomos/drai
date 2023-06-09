import logo from "./logo.svg";
import "./App.css";
import Info from "./section/Intro";
import DragonAI from "./section/DragonAI";
import Solution from "./section/Solution";
import RoadMap from "./section/RoadMap";
import Tokenomics from "./section/Tokenomics";
import Advisor from "./section/Advisor";
import Team from "./section/Team";
import Vision from "./section/Vision";
import Footer from "./section/Footer";
import IGaming from "./section/IGaming";
import ChatBot from "./components/ChatBot";
import ChatDID from "./components/ChatDID";

function App() {
  return (
    <div className="App">
      <ChatBot />
      <ChatDID />
      <Info />
      <DragonAI />
      <IGaming />
      <Solution />
      <RoadMap />
      <Tokenomics />
      <Advisor />
      <Team />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import Info from "./section/Intro";
import DragonAI from "./section/DragonAI";
import Solution from "./section/Solution";
import RoadMap from "./section/RoadMap";
import Tokenomics from "./section/Tokenomics";
import Advisor from "./section/Advisor";
import Team from "./section/Team";

function App() {
  return (
    <div className="App">
      <Info />
      <DragonAI />
      <Solution />
      <RoadMap />
      <Tokenomics />
      <Advisor />
      <Team />
    </div>
  );
}

export default App;

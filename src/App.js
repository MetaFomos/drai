import logo from "./logo.svg";
import "./App.css";

import Info from "./section/Intro";
import DragonAI from "./section/DragonAI";
import Solution from "./section/Solution";
import RoadMap from "./section/RoadMap";
import Tokenomics from "./section/Tokenomics";

function App() {
  return (
    <div className="App">
      <Info />
      <DragonAI />
      <Solution />
      <RoadMap />
      <Tokenomics />
    </div>
  );
}

export default App;

import { useState } from "react";
import AnimalButton from "./AnimalButton";
import GetPhoto from "./GetPhoto";
import "./styles.css";

export default function App() {
  const [type, setType] = useState("Cat");

  return (
    <div className="App">
      <h1>Animal Pictures</h1>
      <div id="buttons">
        <AnimalButton setType={setType} thisType={"Dog"} />
        <AnimalButton setType={setType} thisType={"Cat"} />
        <AnimalButton setType={setType} thisType={"Fox"} />
      </div>
      <GetPhoto type={type} />
      <footer>By Gabriel Sonkowsky</footer>
    </div>
  );
}

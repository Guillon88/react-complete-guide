import { useState } from "react";
import componentsImg from "./assets/components.png";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import CoreConcepts from "./components/CoreConcepts";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        
      </main>
    </>
  );
}

export default App;

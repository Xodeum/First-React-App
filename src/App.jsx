import {useState} from "react"
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from "./data.js"

function App() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedBotton) {
    setSelectedTopic(selectedBotton);

}
  

  let tabContent = <p>Please select a Topic.</p>;
  if (selectedTopic) {
    tabContent = <div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => ( <CoreConcepts key={conceptItem.title} {...conceptItem}
          />))}
          
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
          
        </section>
        <section>
          <div>
          <footer id="footer">Created by Xodeum</footer>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;

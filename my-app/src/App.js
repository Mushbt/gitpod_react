import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreetings';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component!" />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
    </div>
  );
}

export default App;

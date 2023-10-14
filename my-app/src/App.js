import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreetings';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component!" />
    </div>
  );
}

export default App;

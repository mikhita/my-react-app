import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <Greets/>
      <Welcome/> */}
      <Hello name="diana" heroName="fox"/>
      <Hello name="shibla" heroName="mox"/>
      <Hello name="artur" heroName="komb"/>
    </div>
  );
}

export default App;

import './App.css';
// import Greets from './components/Greet';
// import { Greets } from './components/Greet';
// import Message from './components/Message';
import Welcome from './components/welcome';


function App() {
  return (
    <div className="App">
      {/* <Greets name="kuku" heroName="muku">
          <p>this is children</p>
      </Greets> */}
      {/* <Greets name="kuka" heroName="muka">
          <button>Action</button>
      </Greets>
      <Greets name="kuke" heroName="muke">

      </Greets> */}
      <Welcome name="kuku" heroName="muku">
          
      </Welcome>
      <Welcome name="kuka" heroName="muka">
        
      </Welcome>
      <Welcome name="kuke" heroName="muke">
        
      </Welcome> 
    </div>
  );
}

export default App;

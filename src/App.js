import './App.css';
import Primeiro from './components/Primeiro'
import Segundo from './components/Segundo'
import CompPadrao, {Component1, Component2} from './components/Multi'

function App (){
  return(
    <div>
      <h3>Segundo texto</h3>
      <Primeiro/>
      <Segundo/>
      <CompPadrao/> 
      <Component1/>
      <Component2/>
  
    </div>
  );
}

export default App;

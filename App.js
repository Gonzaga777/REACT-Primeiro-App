import './App.css';
import Primeiro from './components/Primeiro'
import Segundo from './components/Segundo'
import CompPadrao, {Component1, Component2} from './components/Multi'
import MinMax from './components/MinMax'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Estilo from './components/Estilos/Estilo'
import Contador from './components/Contador'

function App (){
  return(
    <div>
      {/* <Titulo principal="Titulo Principal" secundario="Titulo Secundario"/>
      <Estilo/>
      <Primeiro/>
      <Segundo/>
      <CompPadrao/> 
      <Component1/>
      <Component2/>
      <MinMax/>
      <MinMax min="2" max="10"/> 
      <MinMax min={4} max={15}/> 
      <MinMax min={40} max={6}/>  */}
      {/* <Botao /> */}

      <Contador inicial={10} passo={5} limiteSuperior={200} limiteInferior={0}/>
    </div>
  );
}

export default App;

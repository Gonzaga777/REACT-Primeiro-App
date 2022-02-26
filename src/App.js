import './App.css';
// import Primeiro from './components/Primeiro'
// import Segundo from './components/Segundo'
// import CompPadrao, {Component1, Component2} from './components/Multi'
// import MinMax from './components/MinMax'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Estilo from './components/Estilos/Estilo'
// import Contador from './components/Contador'
// import Propriedade from './components/Propriedades/Propriedades'
// import Carros from './components/Propriedades/Carros/Carro'
import Pai from './components/Propriedades/Direta/Pai'
import Pai2 from './components/Propriedades/Indireta/Pai'
import Familia from './components/children/Familia'
import Membro from './components/children/Membro'
import ParImpar from './components/condicional/ParImpar'
import UsuarioLogado from './components/condicional/UsuarioLogado'
import ListaProdutos from './components/Lista/ListaProdutos'
import DigiteSeuNome from './components/DigiteSeuNome'
import CadastroNome from './components/classe/CadastrarNome'

function App (){
  return(
    <div>
     <CadastroNome nome="Gonzaga"/>  
      <DigiteSeuNome nome={"Gabriel"} sobrenome={"Gonzaga"}/> 
       <ListaProdutos/> 


      <UsuarioLogado usuario={{nome: 'Gabriel', email: 'Gabrielgonzaga@gmail.com'}}/>
    
    
    
      <ParImpar num={7}/>
      <ParImpar num={10}/>

      <Familia>
        <Membro nome="Guilherme" sobrenome="Viana" cargo="Tio Chato"/>
        <Membro nome="Felipe" sobrenome="Meneses" cargo="Primo Legal"/>
      </Familia>
      <Familia >
        <Membro nome="Alexandra" sobrenome="Cruz" cargo="Tia Rigorosa"/>
        <Membro nome="Fernanda" sobrenome="Fonseca" cargo="Vó Legal"/>
      </Familia> 
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

      {/* <Contador inicial={10} passo={5} limiteSuperior={200} limiteInferior={0}/> */}
      {/* <Propriedade nome="Gabriel"/>
      <ul className="Lista">
          <li style={{border: '1px solid', marginTop:'4px'}}><Carros modelo="Corsa Sedan" marca="Chevrolet" cor="Azul" ano="2006" portas="2" combustivel="Flex" cambio="Manual" tam_aro="17" potencia="200 cv" preco="150000.00"/></li>

          <li style={{border: '1px solid', marginTop:'4px'}}><Carros modelo="Gol" marca="Volksvagem" cor="Preto" ano="2009" portas="4" combustivel="Alcool" cambio="Manual" tam_aro="16" potencia="300 cv" preco="8500.00"/></li>

          <li style={{border: '1px solid', marginTop:'4px'}}> <Carros modelo="Monza" marca="GM" cor="Preto" an0="1993" portas="4" combustivel="Gasolina" cambio="Manual" tam_aro="14" potencia="300 cv" preco="15000.00"/></li>
         
      </ul> */}
       {/* <Pai/>
      <Pai2/> */}
    </div>
  );
}

export default App

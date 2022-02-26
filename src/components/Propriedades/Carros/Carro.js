import React, {useState} from 'react'
import '../../../components/Propriedades/Carros/Carro'
function Carros(props) {
  

    return (
        <>
            <li>
              <div className="modelo">Modelo :{props.modelo}</div>
              <div className="marca">Marca :{props.marca}</div>
              <div className="cor">Cor :{props.cor}</div>
              <div className="ano">Ano :{props.ano}</div>
              <div className="portas">Portas :{props.portas}</div>
              <div className="combustivel">Combustivel :{props.combustivel}</div>
              <div className="cambio">Tipo de cambio :{props.cambio}</div>
              <div className="aro">Tamanho do Aro :{props.tam_aro}</div>
              <div className="potencia">Potência :{props.potencia}</div>
              <div className="preco">Preço : R$ {props.preco}</div><br></br>
              <button style={{backgroundColor: 'green'}}>Comprar</button>

              
  

  

  

  

  

                

            </li>
        </>

    )
}

export default Carros
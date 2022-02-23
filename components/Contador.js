import React, { useState } from 'react'

 function Contador (props) {
    const [numero, setNumero] = useState(props.inicial)
    //setNumero será a funcão que irá alterar o estado
    const incremento = () =>{ 
        if(numero == props.limiteSuperior){
            alert('Limite !')
            return
        }
        setNumero(numero + props.passo)
    }
    const decremento = () => {
        if(numero == props.limiteInferior){
            alert('Nao permite numero negativo !')
            return
        }
        setNumero(numero - props.passo)
    }
    return (
    <>
    <div className="container col-4">
        <h1>Contador <h2>{numero}</h2>
    <button onClick={incremento}>+</button>
    <button onClick={decremento}>-</button></h1>
    
    </div>
    </>
    )
    }
  
    export default Contador;
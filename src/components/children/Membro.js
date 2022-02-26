import React from 'react'

function Membro(props) {

    return (
      <h3 style={{color: 'red'}}>{props.nome} {props.sobrenome} - Cargo Familiar : {props.cargo}</h3>
    )
}

export default Membro
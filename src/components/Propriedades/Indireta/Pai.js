import React, { useState } from 'react'
import Filho from './Filho'
export default props => {
const [texto, setTexto] = useState('') //definindo o estado inicial
const [num, setNum] = useState(0) 
function setValores(texto, numero) {
setTexto(texto)
setNum(numero)
}
return (
<>
<h2>
{texto}{num}
</h2>
<Filho funcao={setValores}/>
</>
)
}
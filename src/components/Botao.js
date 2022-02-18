import React from 'react'
import './Estilos/Estilo.css'
export default props => {
function cadastrar() {
alert('Cadastrado com sucesso!');
console.log('cadastrou');
}
return (
<button className="botao1"onClick={cadastrar}>
Cadastrar
</button>
)
}

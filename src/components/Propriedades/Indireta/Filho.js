export default props => {
    function gerarNumero() {
    return Math.random()
    }
    return (
    <button onClick={ function() {
    const n = gerarNumero() //armazena o retorno da função em uma constante
    props.funcao('O valor é: ', n) //passa os dados para o Pai através dos
    
    }}
    >
    Executar
    </button>
    )
    }
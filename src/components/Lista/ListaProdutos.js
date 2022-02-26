import produtos from './produtos'

function ListaProdutos(props) {
    
    function exibirLista() {
        return produtos.map(p => {
            return (
                <li key={p.id} style={{border: '1px solid'}}>
                    <div>{p.id}</div>
                    <h3>{p.nome}</h3>
                    <h3>R$ {p.preco}</h3>
                    <button style={{backgroundColor: 'green', marginTop: '4px'}}>Comprar</button>
                </li>
                
            )
        })
    }
    
    return(
        <>
            <h2>Lista de Produtos</h2>
            <ul style={{width: '208px'}}>
                {exibirLista()}
                
            </ul>
            
        </>
    )
}

export default ListaProdutos
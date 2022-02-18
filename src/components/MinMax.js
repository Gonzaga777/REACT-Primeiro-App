export default (props) => {
    console.log(props)
    console.log(props.min)
    console.log(props.max)
    let results1 = props.max * props.min
    let results2 = props.max / props.min
    let results3 = props.max - props.min
    let results4 = props.max + props.min
    return<>
    
    <h2>O valor {props.max} é maior que o valor {props.min}</h2>
    <p>O Resultado da Multiplicação é {results1}</p>
    <p>O Resultado da Divisão é {results2}</p>
    <p>O Resultado da Subtração é {results3}</p>
    <p>O Resultado da Adição é {results4}</p>
    </>
    }
    

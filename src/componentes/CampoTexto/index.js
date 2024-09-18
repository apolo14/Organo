import './CampoTexto.css'

const CampoTexto = (props) => {

    //constante quue pega as propriedades da funcao que no caso eh a funcao CampoTexto, passado por tag no componente FORMULARIO!! 
    //ou outro componente que utilizar este componente como filho
    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto
import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
    //o select pode ser escrito sem a arrow function, sendo feita desta maneira
    //        <select>
    //            {props.ListaSuspensa.map(item =>{
    //                return <option key={item}>{item}</option>
    //            })}
    //        </select>
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}               
            </select>         
        </div>
    )

} 

export default ListaSuspensa;
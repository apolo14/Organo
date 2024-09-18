import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        // no react ele usa por de baixo dos panos jsx e tudo eh feito em uma linha so, sendo assim ele faz a verificacao da string no inicio e se for verdadeira retorna o valor para visualizacao
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>

        </section>

        /* caso queira retornar uma outra section ou uma string, o que for pode ser feito dessa forma caso a primeira condicao foor falsa
        
            (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>

        </section>
        : ''
         
        */
    )
}

export default Time
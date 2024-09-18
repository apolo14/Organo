import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    //metodo que ao clicar no botao ele salva o formulario dentro das constantes a cima
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do seu colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario
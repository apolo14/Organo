import './Banner.css'
function Banner() {
    // JSX parece html mas nao eh o react ele cria os elementos no DOM atravez desse JSX
    return(
        //dentro das tags, o nome class eh reservado do javascript, entao se for estilizar utilizar o className para dar classe a tag
        <header className="banner">  
            <img src="/imagens/banner.png" alt="Banner principal da pagina"/>
        </header>
    )
}

export default Banner
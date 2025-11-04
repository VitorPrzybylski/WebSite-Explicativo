import { Link } from "react-router-dom";
import "./style.css"
function Css() {
    return (
        <>
            <header>CSS</header>
            <nav>
                <Link to="/">
                    <button type="button">Home</button>
                </Link>
                <Link to="/Html5">
                    <button type="button">Html5</button>
                </Link>
                <Link to="/JScrip">
                    <button type="button">JScrip</button>
                </Link>
                <Link to="/Nodejs">
                    <button type="button">Nodejs</button>
                </Link>
                <Link to="/React">
                    <button type="button">React</button>
                </Link>

            </nav>
            <main>
                <h3>Css é uma linguagem de estilizaçao para mudar o estilo da pagina web organizando objetos e  deixar o site  bonito</h3>
                <h2>Inicio/criaçao</h2>
                <p>o inicio do Css é simples, apenas usar a tag que voce quiser e abrir chaves</p>
                <p>
                    <h3>Background color </h3>
                    <ul>
                        <li> usado para definir a cor do fundo de quase qualquer coisa </li>
                        <li> tambem pode ser usado imagens e rotaçoes no fundo </li>
                    </ul>
                    <h3>Color</h3>
                    <ul>
                        <li> coloraçao das letras </li>
                        <li> color-scheme para alterar entre modo escuro e modo claro </li>
                    </ul>
                    <h3>Height</h3>
                    <ul>
                        <li> ajusta a altura do objeto </li>
                    </ul>
                    <h3>Width</h3>
                    <ul>
                        <li> ajusta a largura do objeto </li>
                    </ul>
                    <h3>Box-shadow</h3>
                    <ul>
                        <li> cria contraste </li>
                        <li> borda com sombra </li>
                    </ul>
                    <h3>Text-aling</h3>
                    <ul>
                        <li> alinha o texto </li>
                        <li> left, right, center, justify </li>
                    </ul>
                    <h3>Border-radius</h3>
                    <ul>
                        <li> ajusta o raio da borda </li>
                        <li> ajusta o objeto para mais pontudo ou mais circular </li>
                    </ul>
                    <h3>display: flex</h3>
                    <ul>
                        <li> ativa o layout flexível </li>
                        <li> permite usar comando flexiveis </li>
                    </ul>
                    <h3> flex-direction: column</h3>
                    <ul>
                        <li> coloca os elementos em coluna </li>
                    </ul>
                    <h3>align-items</h3>
                    <ul>
                        <li> centraliza horizontalmente </li>
                    </ul>
                    <h3>justify-content</h3>
                    <ul>
                        <li>centraliza verticalmente</li>
                    </ul>
                </p>
            </main>
        </>


    )

}
export default Css;
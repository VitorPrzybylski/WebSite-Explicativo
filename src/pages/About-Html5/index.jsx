import { Link } from "react-router-dom";
import "./style.css"
function Html5() {
    return (
        <>
            <header>HTML5</header>
            <nav>
                <Link to="/">
                    <button type="button">Home</button>
                </Link>
                <Link to="/Css">
                    <button type="button">CSS</button>
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
            <main id="Html5Meio">
                <h1>CONTEUDO</h1>
                <h3>HTML é uma linguagem usada para a publicação de conteúdo (texto, imagens, vídeos, áudio etc.) na web</h3>
                <h2>Inicio/criaçao</h2>
                <p>! tab, cria automatico um inicio no codigo</p>
                <p>Alt + L + O para visualizar HTML no navegador</p>
                <p>
                    <ul>
                        <li> h1 para titulo 1 </li>
                        <li> h2 para titulo 2 </li>
                        <li> h3 para titulo 3 </li>
                        <li> p  para paragrafos </li>
                        <li> em para textos em negrito </li>
                        <li> u para sublinhar a linha </li>
                        <li> div para  divisoes </li>
                        <li> a para links </li>
                        <li> button para botoes </li>
                    </ul>
                </p>
                <h2>Importar imagens ou scripts </h2>
                <p>src é usado para importar imagens e scripts</p>
                <p>img scr para importar imagens </p>
                <p>a href é a sintaxe correta para um link em HTML, sendo Youtube, Spotfy, Twitch ou qualquer outro</p>

                <h2>Extras</h2>
                <p>
                    <h3>p para paragrafos pode ser acompahado de um aling ex:</h3>
                    align="left"
                    align="right"
                    align="center"
                </p>
                <p>
                <h3>Body</h3>
                <ul>
                    <li>define o inicio e o fim do corpo do codigo</li>
                    <li>fonte</li>
                    <li>espaço da tela</li>
                    <li>cor de fundo</li>
                    <li>cor das letras</li>
                </ul>
                <h3>header</h3>
                <ul>
                    <li>cabeçalho da aplicaçao</li>
                </ul>
                <h3>footer</h3>
                <ul>
                    <li>roda pé do projeto</li>
                </ul>
                <h3>button</h3>
                <ul>
                    <li>cria um botao</li>
                    <li>pode seer atribuido diferentes funçoes para esse botao</li>
                    <li>rotas</li>
                    <li>alterar objetos</li>
                </ul>
                </p>
            </main>
        </>


    )

}
export default Html5;
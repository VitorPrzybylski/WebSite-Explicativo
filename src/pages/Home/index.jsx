import { Link } from "react-router-dom"
import "./style.css"
function Home() {
    return (
        <>
            <header>Home</header>
            <nav>
                <Link to="/Css">
                    <button type="button">CSS</button>
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
            <main id="HOME">
                <h1>Web site Explicativo</h1>
                <p>
                    <h2><li>Este web site tem a funçao de descrever para que serve e como funciona alguns comandos em Html5, Css, JScript, React e Node.JS.</li>
                        <li>Web site Pessoal para bloco de notas e anotaçao de duvidas</li>
                        <li>Os Conteudos sao divididos da seguinte forma:</li>
                        <div id="exemploHome">
                            <h1>CONTEUDO:</h1>
                            <h2>Primeiro assunto:</h2>
                            <p>explicaçao...</p>

                            <h2>Segundo assunto:</h2>
                            <p>explicaçao...</p>

                            <h2>Terceiro assunto:</h2>
                            <p>explicaçao...</p>

                            <h2>Quarto assunto:</h2>
                            <p>explicaçao...</p>
                        </div>

                    </h2>
                </p>


            </main>

        </>
    )
}
export default Home;
import { Link } from "react-router-dom";
import "./style.css"
function Nodejs() {
    return (
        <>
            <header>Nodejs</header>
            <nav>
                <Link to="/">
                    <button type="button">Home</button>
                </Link>
                <Link to="/Css">
                    <button type="button">CSS</button>
                </Link>
                <Link to="/Html5">
                    <button type="button">Html5</button>
                </Link>
                <Link to="/JScrip">
                    <button type="button">JScrip</button>
                </Link>
                <Link to="/React">
                    <button type="button">React</button>
                </Link>

            </nav>
            <main>
                <h3>NodeJs permite que o JavaScript seja executado fora do navegador, ou seja, no lado do servidor.</h3>
                <p>
                    <h3>Inicio </h3>
                    <ul>
                        <li> instalar o node.js </li>
                        <li> criar arquivos .js para poder usar o node.js </li>
                        <li> rodar no terminal node nomeDoArquivo </li>
                        <li> npm init para inicializar o projeto </li>
                        <li> permite a abertura de um servidor </li>
                        <li> possibilita uso do package.json </li>
                        <li> Pode criar servidores HTTP sem frameworks </li>
                    </ul>
                    
                    <h3>Express </h3>
                    <ul>
                        <li> framework para criar APIs e servidores web </li>
                        <li> principal motivo para a escolha do Node.js </li>
                        <li> npm install express </li>
                        <li> gestao de rotas e configuraçoes de servidor  </li>
                    </ul>
                    <h3>Banco </h3>
                    <ul>
                        <li> node.js permite se conectar facilmente com bancos </li>
                        <li> Acesso a MySQL e MongoDB </li>
                        <li> possibilita de usar o sequelize para ORM e validaçao de dados </li>
                    </ul>
                    <h3>Async / Await </h3>
                    <ul>
                        <li> uma forma  simples de lidar com operações assíncronas no Node.js </li>
                        <li> permite que coisas que demoram como consultar o banco ou chamar uma api, nao gerem falhas </li>
                        <li> async marca uma função como assíncrona, retornando uma promise </li>
                        <li> await espera a resposta antes de continuar o código  </li>
                    </ul>
                    <h3>SRC</h3>
                    <ul>
                        <li> responsavel para por guardas a maior parte das pastas </li>
                        <li> permite que coisas que demoram como consultar o banco ou chamar uma api, nao gerem falhas </li>
                        <li> async marca uma função como assíncrona, retornando uma promise </li>
                        <li> await espera a resposta antes de continuar o código  </li>
                    </ul>
                </p>
            </main>
        </>


    )

}
export default Nodejs;
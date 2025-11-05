import { Link } from "react-router-dom";
import "./style.css"
function React() {
    return (
        <>
            <header>React</header>
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
                <Link to="/Nodejs">
                    <button type="button">Nodejs</button>
                </Link>

            </nav>
            <main>
                    <h3>React é uma biblioteca JavaScript que permite criar componentes reutilizáveis e independentes
                        para nao ter que recriar eles em cada um dos arquivos</h3>
                <p>
                    <h3>Inicio </h3>
                    <ul>
                        <li> npm create vite@latest . --template react </li>
                        <li> escolher React e depois JavaScript e digitar npm i </li>
                        <li> App.jsx, remover tudo dentro do return, e todas as importaçoes menos App.css; </li>
                        <li> começar a criar, header(cabeçalho), main(principal), footer(rodapé); </li>
                        <li> criar a pasta pages em src </li>
                        <li> criar pastas Home e About em pages </li>
                        <li> usar o App.jsx como principal, que apenas chamas as paginas em pages, usando export e import /exemplo pagina de exemplos musica, filmes </li>
                        <li> lembrar de alterar o import se mudar de pasta, ex (./components/Form) foi para (../../components/Form) </li>
                    </ul>
                    <h3>Funcionalidades</h3>
                    <ul>
                        <li> Permite import e export rapidos e eficientes </li>
                        <li> se o import foi feito uma vez naquele arquivo, o elemento importado pode ser usado quantas vezes quiser </li>
                        <li> simplicidade na hora de escrever o codigo, ex usar só o nome do import no react, já no html puro, deve ser feito um novo import toda vez que for usar  </li>
                    </ul>
                    <h3>Router-Dom </h3>
                    <ul>
                        <h4>Browser Router</h4>
                        <li>indica na main.jsx que o app.jsx esta sobre o acesso no Browser Router</li>

                        <h4>Routes e Route</h4>
                        <li>listas de rotas e rotas</li>
                        <li>coloca cada uma das rotas que podem ser acessadas no projeto</li>

                        <h4>Link</h4>
                        <li> tem a funçao de navegaçao entre os arquivos de rotas </li>
                        <li> pode ser colocado em qualquer pagina, se deseja fazer a navegaçao dessa pagina para outra </li>

                    </ul>
                    <h3>DICAS </h3>
                    <ul>
                        <li> DICAS  </li>
                        <li> Ctrl + R no terminal, abre um histórico de comandos executados no terminal </li>
                        <li> usar o npm run dev para começar a ver a pagina e clicar no link que aparece </li>
                        <li> tudo que pode ser reaproveitado vai para compontents, para ser feito apenas uma vez e usado em outras situaçoes </li>
                        <li> toda funçao deve ter um retorno </li>
                    </ul>
                    </p>
            </main>
        </>


    )

}
export default React;
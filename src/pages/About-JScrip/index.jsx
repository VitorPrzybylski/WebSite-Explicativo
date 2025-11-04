import { Link } from "react-router-dom";
import "./style.css"
function JScrip() {
    return (
        <>
            <header>JScrip</header>
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
                <Link to="/Nodejs">
                    <button type="button">Nodejs</button>
                </Link>
                <Link to="/React">
                    <button type="button">React</button>
                </Link>

            </nav>
            <main>
                <h3>Java Script é uma linguagem focada em deixar sites web mais dinamico e interativos,
                    Ele permite manipular o conteúdo (HTML) e a aparência (CSS), adicionar animações, validar formulários.
                    Consegue se comunicar com APIs do back-end
                </h3>
                <p>
                    <h3>Script</h3>
                    <ul>
                        <li> usar o comando script dentro de um arquivo html, permite que usar os comandos do JScript </li>
                    </ul>
                    <h3>Function</h3>
                    <ul>
                        <li> pode ser criado uma funçao e atribuido uma funçao a ela </li>
                        <li> essa funçao pode ser chamada em qualquer tag do body </li>
                        <li> capacidade de executar funçoes que envolva estilizaçao, como cor de fundo,cor da letra entre outros </li>
                    </ul>
                    <h3>Prompt</h3>
                    <ul>
                        <li> cria uma caixa de dialogo</li>
                        <li> pode ser escrito alguma coisa dentro da caixa </li>
                    </ul>
                    <h3>Var </h3>
                    <ul>
                        <li> cria uma variavel </li>
                        <li> pode ser usada para salvar dados(durante o uso) e realizar operaçoes </li>
                    </ul>
                    <h3>Switch / Case </h3>
                    <ul>
                        <li> usada para escolher uma funçao dependendo do dado recebido </li>
                        <li> se a escolha for A, mostrar a trilha A </li>
                        <li> se a escolha for B, mostrar a trilha B </li>
                    </ul>
                    <h3>ALERT </h3>
                    <ul>
                        <li> uma mensagem que aparece na tela </li>
                        <li> esta mensagem nao sai a mens que o usuario clique nela </li>
                        <li> util para questoes de alertas sobre algo </li>
                    </ul>
                    <h3>do/while </h3>
                    <ul>
                        <li> sequencia de repetiçoes </li>
                        <li> repetira o loop, enquando o requesito for comprido </li>
                        <li> quando deixar de ser verdade, o loop para </li>
                    </ul>
                    <h3>For </h3>
                    <ul>
                        <li> sequencia de repetiçoes </li>
                        <li> repetira o loop, e adicionara algo ao requesito em cada repetiçao </li>
                        <li> se o requesito pedido for cumprido, ele para o loop </li>
                    </ul>
                </p>
            </main>

        </>


    )

}
export default JScrip;
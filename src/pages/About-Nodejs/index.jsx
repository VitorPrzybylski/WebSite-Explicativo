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
                <h1>CONTEUDO</h1>

                <h2>MINI-TITULO</h2>
                <p>explicaçao</p>

                <h2>MINI-TITULO</h2>
                <p>explicaçao</p>

                <h2>MINI-TITULO</h2>
                <p>explicaçao</p>

                <h2>MINI-TITULO</h2>
                <p>explicaçao</p>
            </main>
        </>


    )

}
export default Nodejs;
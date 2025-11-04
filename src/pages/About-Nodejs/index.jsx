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
                <h3>NodeJs</h3>
                <p>
                    <h3>Inicio </h3>
                    <ul>
                        <li> npm create vite@latest . --template react </li>
                        <li> escolher React e depois JavaScript e digitar npm i </li>
                    </ul>
                    
                    <h3>Inicio </h3>
                    <ul>
                        <li> npm create vite@latest . --template react </li>
                        <li> escolher React e depois JavaScript e digitar npm i </li>
                    </ul>
                </p>
            </main>
        </>


    )

}
export default Nodejs;
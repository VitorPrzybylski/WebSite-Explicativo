import { Link } from "react-router-dom";
import "./style.css"
function Html5() {
    return (
        <>
        <header>HTML5</header>
            <nav>
                <Link to="/">
                    <button id="homeBotao" type="button">HOME</button>
                </Link>
                <Link to="/Css">
                    <button type="button">CSS</button>
                </Link>
                <Link to="/JScrip">
                    <button type="button">JScrip</button>
                </Link>

            </nav>
            <main>
                <h1>Html5</h1>
            </main>
        </>


    )

}
export default Html5;
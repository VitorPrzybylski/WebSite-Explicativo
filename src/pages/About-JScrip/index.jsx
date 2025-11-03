import { Link } from "react-router-dom";
import "./style.css"
function JScrip() {
    return (
        <>
            <header>JScrip</header>
            <Link to="/">
                <button id="homeBotao" type="button">HOME</button>
            </Link>
            <Link to="/Css">
                <button type="button">CSS</button>
            </Link>
            <Link to="/Html5">
                <button type="button">Html5</button>
            </Link>
            <main>
                <h1>JScrip</h1>
            </main>

        </>


    )

}
export default JScrip;
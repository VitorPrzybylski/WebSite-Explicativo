import { Link } from "react-router-dom"
import "./style.css"
function Home() {
    return (
        <>
                <header>Home</header>
                <Link to="/Css">
                    <button type="button">CSS</button>
                </Link>
                <Link to="/Html5">
                    <button type="button">Html5</button>
                </Link>
                <Link to="/JScrip">
                    <button type="button">JScrip</button>
                </Link>
                <main id="HOME">
                    <h1>CONTEUDO</h1>
                </main>
        </>
    )
}
export default Home;
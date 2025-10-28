import { Link } from "react-router-dom"
import "./style.css"
function Home() {
    return (
        <>
            <main id="home">
                <h1>Home</h1>
            </main>
            <Link to="/Css">
                <button type="button">VOLTAR</button>
            </Link>
        </>
    )
}
export default Home;
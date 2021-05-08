import Footer from "components/Footer";
import NavBar from "components/NaveBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                </div>
            </div>
            <Link className="btn btn-primary btn-lg" to="/dashboard">
                Acessar dashboard
            </Link>
            <Footer />

        </>
    );
}

export default Home;
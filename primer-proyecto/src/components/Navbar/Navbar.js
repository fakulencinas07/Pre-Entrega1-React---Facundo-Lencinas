import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-blue bg-blue">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Rescatando Bigotes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Cuchas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Calendarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Relojes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Tazas</a>
                            </li>
                            <li>
                            <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </nav>
    )
}

export default Navbar
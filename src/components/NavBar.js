import React from 'react';
import CartWidget from './CartWidget';

// Importando estilos do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Minha Loja
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Categoria 1
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Categoria 2
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Categoria 3
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Adicionando o componente CartWidget na Navbar */}
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;

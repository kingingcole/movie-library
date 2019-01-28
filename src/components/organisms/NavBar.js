import RecommendButton from '../molecules/RecommendButton'
import NavBarBrand from '../atoms/NavBarBrand'
import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar sticky-top mb-5 navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                <Link to='/'>
                    <NavBarBrand/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <p className="text-center  nav-link"><RecommendButton/> <span
                                className="sr-only">(current)</span></p>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar
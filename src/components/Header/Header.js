import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
const Home = () =>
{
    return (
        <header>
            <img src={logo} alt="" />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/review">Order Review</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/manage">Manage Inventory</a>
                            </li>
                        </ul>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button className="btn btn-outline-secondary" type="button">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Home;


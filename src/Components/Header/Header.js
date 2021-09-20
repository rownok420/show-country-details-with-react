import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="bg-info fw-bold text-white">
                <section className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <a className="navbar-brand fs-3" href="/header">Country Details</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto fs-6">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/item">Country</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/pricing">Details</a>
                                    </li>
                                    
                                </ul>
                        </div>
                        </div>
                    </nav>
                </section>
            </header>
        </div>
    );
};

export default Header;
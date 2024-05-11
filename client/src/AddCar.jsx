import React from 'react';
import './AddCar.css';

function AddCar() {
    return (
        <div className="AddCar">
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo"></a>
                    <i className="ri-steering-line"></i>
                    Elecar
                </nav>
            </header>
            <main className="main">
                <section className="home section" id="home">
                    {/* Home section content */}
                </section>
                {/* More sections */}
            </main>
            <footer className="footer section">
                {/* Footer content */}
            </footer>
        </div>
    );
}

export default AddCar;
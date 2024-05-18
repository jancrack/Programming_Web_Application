import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import CarList from '../CarList/CarList';
import NewCarForm from '../NewCarForm/NewCarForm';
import './App.css';

function App() {
    // const [cars, setCars] = useState([]);

    return (
        <div className="app-container">
            <section id="existing-cars">
                <NewCarForm/>
                <CarList/>
            </section>
            {/*{cars.map(car => (*/}
            {/*    <div key={car.id}>*/}
            {/*        <h2>{car.name}</h2>*/}
            {/*        <p>{car.description}</p>*/}
            {/*    </div>*/}
            {/*))}*/}

        </div>
    );
}

export default App;
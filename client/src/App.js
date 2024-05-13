import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarList from './CarList'; // Импортиране на новия компонент
import './App.css'; // Импортиране на CSS файла

function App() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cars', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className="app-container">
            <section id="existing-cars">
                <CarList />
            </section>
            {cars.map(car => (
                <div key={car.id}>
                    <h2>{car.name}</h2>
                    <p>{car.description}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarList from './CarList';
import NewCarForm from './NewCarForm';
import './App.css';

function App() {
    const [cars, setCars] = useState([]);

    const fetchCars = async () => {
        const response = await axios.get('http://localhost:3001/cars');
        setCars(response.data);
    };

    useEffect(() => {
        fetchCars();
    }, []);

    const handleCarAdded = async (newCar) => {
        // Изпращане на POST заявка към сървъра с данните за новата кола
        await axios.post('http://localhost:3001/cars', newCar);
        // Обновяване на списъка с коли след добавяне на нова кола
        fetchCars();
    };

    return (
        <div className="app-container">
            <section id="existing-cars">
                <NewCarForm onCarAdded={handleCarAdded}/> {/* Добавяне на NewCarForm в рендер функцията */}
                <CarList onCarAdded={handleCarAdded}/>

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
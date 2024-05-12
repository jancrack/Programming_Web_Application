import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewCarForm from './NewCarForm';

function App() {
    const [cars, setCars] = useState([]);
    const [isAddingCar, setIsAddingCar] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/cars') // Промяна на URL адреса
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    const handleCarAdded = () => {
        setIsAddingCar(false);
        axios.get('http://localhost:3001/cars') // Промяна на URL адреса
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };
    return (
        <div>
            {isAddingCar ? (
                <NewCarForm onCarAdded={handleCarAdded}/>
            ) : (
                <button onClick={() => setIsAddingCar(true)}>Add Car</button>
            )}
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
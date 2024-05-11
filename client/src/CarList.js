// client/src/CarList.js
import React, { useEffect, useState } from 'react';
import { getAllCars } from './CarService';
import CarListItem from './CarListItem';

function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars()
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            {cars.map(car => (
                <CarListItem key={car.id} car={car} />
            ))}
        </div>
    );
}

export default CarList;
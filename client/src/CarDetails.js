// client/src/CarDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarDetails } from './CarService';

function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        getCarDetails(id)
            .then(response => {
                setCar(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [id]);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{car.Brand} {car.Model}</h2>
            {/* Display other car details here */}
        </div>
    );
}

export default CarDetails;
// client/src/CarListItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function CarListItem({ car }) {
    return (
        <div>
            <h2>{car.Brand} {car.Model}</h2>
            <Link to={`/cars/${car.id}`}>View Details</Link>
        </div>
    );
}

export default CarListItem;
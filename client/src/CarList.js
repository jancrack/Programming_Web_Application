import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CarList.css';
function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        const response = await axios.get('http://localhost:3001/cars');
        setCars(response.data);
    };

    const deleteCar = async (id) => {
        await axios.delete(`http://localhost:3001/cars/${id}`);
        fetchCars();
    };

    return (
        <div>
            <h1>Car List</h1>
            <div className="featured__container container">
                <ul className="featured__filters">
                    <li>
                        <button className="featured__item active-featured" data-filter="all">
                            <span>All</span>
                        </button>
                    </li>
                </ul>
                <div className="featured__content grid">
                    {cars.map((car, index) => (
                        <article className="featured__card mix tesla" key={index}>
                            <div className="shape shape__smaller"></div>
                            <h1 className="featured__title">{car.Brand}</h1>
                            <h3 className="featured__subtitle">{car.Model}</h3>
                            <img src={car.image} alt="" className="featured__img"/>
                            <p>Fuel Type: {car['Fuel type']}</p>
                            <p>Year: {car.Year}</p>
                            <p>Mileage: {car.Mileage}</p>
                            <p>Emission Class: {car['Emmission class']}</p>
                            <p>Cylinder Content: {car['Cylinder content']}</p>
                            <p>Transmission: {car.Transmission}</p>
                            <p>Outer Color: {car['Outer color']}</p>
                            <p>1st Registration: {car['1st reg.']}</p>
                            <p>Dynamic Power: {car['Dynamic Power']}</p>
                            <p>Bodywork: {car.Bodywork}</p>
                            <p>Car Description: {car['Car description']}</p>
                            <p>Rim Size: {car['Rim size']}</p>
                            <h3 className="featured__price">${car.Price}</h3>
                            <button className="button featured__button">
                                <i className="ri-shopping-bag-2-line"></i>
                            </button>
                            <button onClick={() => deleteCar(car.id)} className="delete-button">Delete</button>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarList;
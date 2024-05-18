import React, { useState } from 'react';
import axios from 'axios';

function UpdateCarForm() {
    const [carData, setCarData] = useState({
        Brand: '',
        Model: '',
        'Fuel type': '',
        Year: '',
        Mileage: '',
        'Emmission class': '',
        'Cylinder content': '',
        Transmission: '',
        'Outer color': '',
        '1st reg.': '',
        'Dynamic Power': '',
        Bodywork: '',
        'Car description': '',
        'Rim size': '',
        Price: ''
    });

    const handleInputChange = (event) => {
        setCarData({
            ...carData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const carId = '123'; // Заменете с идентификатора на колата, която искате да обновите
        await axios.put(`http://localhost:3001/cars/${carId}`, carData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Brand:
                <input type="text" name="Brand" value={carData.Brand} onChange={handleInputChange} />
            </label>
            <label>
                Model:
                <input type="text" name="Model" value={carData.Model} onChange={handleInputChange} />
            </label>
            <label>
                Fuel type:
                <input type="text" name="Fuel type" value={carData['Fuel type']} onChange={handleInputChange} />
            </label>
            <label>
                Year:
                <input type="text" name="Year" value={carData.Year} onChange={handleInputChange} />
            </label>
            <label>
                Mileage:
                <input type="text" name="Mileage" value={carData.Mileage} onChange={handleInputChange} />
            </label>
            <label>
                Emmission class:
                <input type="text" name="Emmission class" value={carData['Emmission class']} onChange={handleInputChange} />
            </label>
            <label>
                Cylinder content:
                <input type="text" name="Cylinder content" value={carData['Cylinder content']} onChange={handleInputChange} />
            </label>
            <label>
                Transmission:
                <input type="text" name="Transmission" value={carData.Transmission} onChange={handleInputChange} />
            </label>
            <label>
                Outer color:
                <input type="text" name="Outer color" value={carData['Outer color']} onChange={handleInputChange} />
            </label>
            <label>
                1st reg.:
                <input type="text" name="1st reg." value={carData['1st reg.']} onChange={handleInputChange} />
            </label>
            <label>
                Dynamic Power:
                <input type="text" name="Dynamic Power" value={carData['Dynamic Power']} onChange={handleInputChange} />
            </label>
            <label>
                Bodywork:
                <input type="text" name="Bodywork" value={carData.Bodywork} onChange={handleInputChange} />
            </label>
            <label>
                Car description:
                <input type="text" name="Car description" value={carData['Car description']} onChange={handleInputChange} />
            </label>
            <label>
                Rim size:
                <input type="text" name="Rim size" value={carData['Rim size']} onChange={handleInputChange} />
            </label>
            <label>
                Price:
                <input type="text" name="Price" value={carData.Price} onChange={handleInputChange} />
            </label>
            <button type="submit">Update Car</button>
        </form>
    );
}

export default UpdateCarForm;
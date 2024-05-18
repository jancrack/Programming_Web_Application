import React, { useState } from 'react';
import axios from 'axios';
import './NewCarforma.css';

function NewCarForm({ onCarAdded }) {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');
    const [emmissionClass, setEmmissionClass] = useState('');
    const [cylinderContent, setCylinderContent] = useState('');
    const [transmission, setTransmission] = useState('');
    const [outerColor, setOuterColor] = useState('');
    const [firstReg, setFirstReg] = useState('');
    const [dynamicPower, setDynamicPower] = useState('');
    const [bodywork, setBodywork] = useState('');
    const [description, setDescription] = useState('');
    const [rimSize, setRimSize] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState(''); // New state variable for price

    const handleSubmit = async (event) => {
        event.preventDefault();
        /*
        // const formData = new FormData();
        // formData.append('Brand', brand);
        // formData.append('Model', model);
        // formData.append('Fuel type', fuelType);
        // formData.append('Year', year);
        // formData.append('Mileage', mileage);
        // formData.append('Emmission class', emmissionClass);
        // formData.append('Cylinder content', cylinderContent);
        // formData.append('Transmission', transmission);
        // formData.append('Outer color', outerColor);
        // formData.append('1st reg.', firstReg);
        // formData.append('Dynamic Power', dynamicPower);
        // formData.append('Bodywork', bodywork);
        // formData.append('Car description', description);
        // formData.append('Rim size', rimSize);
        // formData.append('Price', price); // Add price to form data
        // if (image) {
        //     formData.append('Image', image, image.name);
        // }

         */

        const formData = {
            "Brand": brand,
            "Year": year,
            "Mileage": mileage,
            "Fuel_type": fuelType,
            "Emmission_class": emmissionClass,
            "Model": model,
            "Cylinder_content": cylinderContent,
            "Transmission": transmission,
            "Outer_color": outerColor,
            "first_reg": firstReg,
            "Dynamic_power": dynamicPower,
            "Bodywork": bodywork,
            "Car_description": description,
            "Rim_size": rimSize,
            "Price": price,
            "Image": image
        }
        console.log(formData);
        const response = await axios.post('http://localhost:3001/cars', formData);

        if (response.status === 200) {

            // измисли кво да правиш ако/след като се добави кола
        }
    };


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // Когато четенето приключи, `result` ще съдържа base64 кодираната версия на файла
            const base64String = reader.result;
            setImage(base64String);
        };

        if (file) {
            // Започва четенето на файла като base64
            reader.readAsDataURL(file);
        }
    };

    return (
        <form className="NewCarforma" onSubmit={handleSubmit}>
            <label>
                Brand:
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
            </label>
            <label>
                Model:
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
            </label>
            <label>
                Fuel Type:
                <input type="text" value={fuelType} onChange={(e) => setFuelType(e.target.value)} required />
            </label>
            <label>
                Year:
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />
            </label>
            <label>
                Mileage:
                <input type="number" value={mileage} onChange={(e) => setMileage(e.target.value)} required />
            </label>
            <label>
                Emmission Class:
                <input type="number" value={emmissionClass} onChange={(e) => setEmmissionClass(e.target.value)} required />
            </label>
            <label>
                Cylinder Content:
                <input type="number" value={cylinderContent} onChange={(e) => setCylinderContent(e.target.value)} required />
            </label>
            <label>
                Transmission:
                <input type="text" value={transmission} onChange={(e) => setTransmission(e.target.value)} required />
            </label>
            <label>
                Outer Color:
                <input type="text" value={outerColor} onChange={(e) => setOuterColor(e.target.value)} required />
            </label>
            <label>
                1st Reg.:
                <input type="text" value={firstReg} onChange={(e) => setFirstReg(e.target.value)} required />
            </label>
            <label>
                Dynamic Power:
                <input type="text" value={dynamicPower} onChange={(e) => setDynamicPower(e.target.value)} required />
            </label>
            <label>
                Bodywork:
                <input type="text" value={bodywork} onChange={(e) => setBodywork(e.target.value)} required />
            </label>
            <label>
                Car Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Rim Size:
                <input type="number" value={rimSize} onChange={(e) => setRimSize(e.target.value)} required />
            </label>
            <label>
                Price: {/* New form field for price */}
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </label>
            <label className="kartinka">
                Image:
                <input type="file" onChange={handleImageChange} />
            </label>
            <button type="submit">Add Car</button>
        </form>
    );
}

export default NewCarForm;
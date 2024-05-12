import React, { useState } from 'react';
import axios from 'axios';

function NewCarForm({ onCarAdded }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        if (image) {
            formData.append('image', image, image.name);
        }

        const response = await axios.post('http://localhost:3300/', formData);
        if (response.status === 200) {
            onCarAdded();
        }
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Image:
                <input type="file" onChange={handleImageChange} />
            </label>
            <button type="submit">Add Car</button>
        </form>
    );
}

export default NewCarForm;
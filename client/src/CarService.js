// client/src/CarService.js
import axios from 'axios';

const API_URL = 'http://localhost:3300';

export function getAllCars() {
    return axios.get(`${API_URL}/cars`);
}

export function getCarDetails(id) {
    return axios.get(`${API_URL}/cars/${id}`);
}
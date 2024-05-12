import {cars} from "../models/carModel";
import {Request, Response} from "express";

export class CarController {
    private carsModel: cars;
    constructor() {
        this.carsModel = new cars();
    }

    async getAllCars(req: Request, res: Response) {
        const cars = await this.carsModel.getAllCars();
        return cars;
    }
    async createCar(req: Request, res: Response) {
        try {
            const newCar = await this.carsModel.createCar(req.body);
            return newCar;
        } catch (error) {
            console.error(error);
            throw new Error('An error occurred while creating the car.');
        }
    }

    async updateCar(req: Request, res: Response) {
        const updatedCar = await this.carsModel.updateCar(req.params.id, req.body);
        return updatedCar;
    }

    async deleteCar(req: Request, res: Response) {
        await this.carsModel.deleteCar(req.params.id);
        return;
    }
}
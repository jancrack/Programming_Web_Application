import {cars} from "../models/carModel";
import {Request, Response} from "express";

export class CarController {
    private carsModel: cars;
    constructor() {
        this.carsModel = new cars();
    }

    async getAllCars(req: Request, res: Response) {
        const cars = await this.carsModel.getAllCars();
        res.send(cars);
    }
    async createCar(req: Request, res: Response) {
        try {
            const newCar = await this.carsModel.createCar(req.body);
            res.send(newCar);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'An error occurred while creating the car.' });
        }
    }

    async updateCar(req: Request, res: Response) {
        const updatedCar = await this.carsModel.updateCar(req.params.id, req.body);
        res.send(updatedCar);
    }

    async deleteCar(req: Request, res: Response) {
        await this.carsModel.deleteCar(req.params.id);
        res.sendStatus(204);
    }

}
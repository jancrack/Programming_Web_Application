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
}
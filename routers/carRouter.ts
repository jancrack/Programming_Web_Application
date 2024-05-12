import {Request, Response, Router} from "express";
import {CarController} from "../controllers/CarController";

export const carRouter = Router();

const carController = new CarController();
const getAllCarsHandler = async (req: Request, res: Response) => {
    const cars = await carController.getAllCars(req, res);
    res.json(cars); // Връщане на данните като JSON отговор
}
const createCarHandler = async (req: Request, res: Response) => {
    await carController.createCar(req, res);
}

const updateCarHandler = async (req: Request, res: Response) => {
    await carController.updateCar(req, res);
}

const deleteCarHandler = async (req: Request, res: Response) => {
    await carController.deleteCar(req, res);
}

carRouter.get("/", getAllCarsHandler);
carRouter.post("/", createCarHandler);
carRouter.put("/:id", updateCarHandler);
carRouter.delete("/:id", deleteCarHandler);


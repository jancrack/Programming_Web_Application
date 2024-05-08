import {Request, Response, Router} from "express";
import {CarController} from "../controllers/CarController";

export const carRouter = Router();

const carController = new CarController();
const getAllCarsHandler = async (req: Request, res: Response) => {
    await carController.getAllCars(req, res);
}


carRouter.get("/", getAllCarsHandler)

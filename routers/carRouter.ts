import {Request, Response, Router} from "express";
import {CarController} from "../controllers/CarController";

export const carRouter = Router();

const carController = new CarController();

const getAllCarsHandler = async (req: Request, res: Response) => {
    try {
        const cars = await carController.getAllCars(req, res);
        res.json(cars); // Изпраща резултата като отговор
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'An unknown error occurred.' });
        }
    }
}
const createCarHandler = async (req: Request, res: Response) => {
    try {
        const newCar = await carController.createCar(req, res);
        res.send(newCar);
    } catch (error) {
        console.error('Error:', error); // Добавяне на лог за грешката
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'An unknown error occurred.' });
        }
    }
}

const updateSpecificCarHandler = async (req: Request, res: Response) => {
    try {
        const updatedCar = await carController.updateSpecificCar(req, res);
        res.send(updatedCar);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'An unknown error occurred.' });
        }
    }
}

carRouter.put("/specific/:id", updateSpecificCarHandler);

const updateCarHandler = async (req: Request, res: Response) => {
    try {
        const updatedCar = await carController.updateCar(req, res);
        res.send(updatedCar);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'An unknown error occurred.' });
        }
    }
}

const deleteCarHandler = async (req: Request, res: Response) => {
    try {
        await carController.deleteCar(req, res);
        res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'An unknown error occurred.' });
        }
    }
}
carRouter.get("/", getAllCarsHandler);
carRouter.post("/", createCarHandler);
carRouter.put("/:id", updateCarHandler);
carRouter.delete("/:id", deleteCarHandler);
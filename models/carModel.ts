import {DB} from "../core/DB";
import {Response, Request} from "express";
export class cars extends DB{
    // getAllCars ми е за GET заявка, където трябва да вземем всички коли от базата данни.
    async getAllCars() {
        try {
            const [rows] = await this.conn.query("SELECT * FROM cars");
            return rows;
        } catch (e){
            const error = e as Error;
            throw new Error(error.message);
        }
    }

    // createCar ми е за POST заявка, където трябва да подадем данните на колата, която искаме да създадем.
    async createCar(carData: any) {
        try {
            const [result] = await this.conn.query("INSERT INTO cars SET `Brand` = 'audi',`Model` = 'a4',`Fuel type` = 'diesel',`Year` = '2020',`Mileage` = 50000,`Emmission class` = 4,`Cylinder content` = 2000,`Transmission` = 'automatic',`Outer color` = 'red',`1st reg.` = '23/10/2020',`Dynamic Power` = '150hp',`Bodywork` = 'Sedan',`Car description` = 'baksldlask',`Rim size` = 17", carData);
            return result;
        } catch (e){
            const error = e as Error;
            throw new Error(error.message);
        }
    }

    // updateCar ми е за PUT заявка, където трябва да подадем id на колата, която искаме да променим и данните, които искаме да променим.
    async updateCar(id: string, carData: any) {
        try {
            const [result] = await this.conn.query("UPDATE cars SET `Outer color` = 'red', `Year` = 2020 WHERE id = 1", [carData, id]);
            return result;
        } catch (e){
            const error = e as Error;
            throw new Error(error.message);
        }
    }
    // deleteCar ми е за DELETE заявка, където трябва да подадем id на колата, която искаме да изтрием.
    async deleteCar(id: string) {
        try {
            const [result] = await this.conn.query("DELETE FROM cars WHERE id = ?", id);
            return result;
        } catch (e){
            const error = e as Error;
            throw new Error(error.message);
        }
    }
}
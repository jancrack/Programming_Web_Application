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
            const [result] = await this.conn.query("INSERT INTO cars SET `Brand` = 'Honda',`Model` = 'Civic',`Fuel type` = 'petrol',`Year` = '1998',`Mileage` = 123030,`Emmission class` = 2,`Cylinder content` = 1600,`Transmission` = 'manual',`Outer color` = 'grey',`1st reg.` = '23/10/1998',`Dynamic Power` = '125hp',`Bodywork` = 'Coupe',`Car description` = 'daigaznahondata',`Rim size` = 15", carData);
            return result;
        } catch (e){
            const error = e as Error;
            throw new Error(error.message);
        }
    }

    // updateCar ми е за PUT заявка, където трябва да подадем id на колата, която искаме да променим и данните, които искаме да променим.
    async updateCar(id: string, carData: any) {
        try {
            const [result] = await this.conn.query("UPDATE cars SET `Dynamic Power` = '175hp',`Car description` = 'hondaaa' WHERE id = 8", [carData, id]);            return result;
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
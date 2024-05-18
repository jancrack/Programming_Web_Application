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
            const [result] = await this.conn.query(
                "INSERT INTO cars (" +
                "Brand, " +
                "Model, " +
                "`Fuel type`, " +
                "Year, Mileage, " +
                "`Emmission class`, " +
                "`Cylinder content`, " +
                "Transmission, " +
                "`Outer color`, " +
                "`1st reg.`, " +
                "`Dynamic Power`, " +
                "Bodywork, " +
                "`Car description`, " +
                "`Rim size`, " +
                "Image, " +
                "Price) " +
                "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [
                    carData.Brand,
                    carData.Model,
                    carData.Fuel_type,
                    carData.Year,
                    carData.Mileage,
                    carData.Emmission_class,
                    carData.Cylinder_content,
                    carData.Transmission,
                    carData.Outer_color,
                    carData.first_reg,
                    carData.Dynamic_power,
                    carData.Bodywork,
                    carData.Car_description,
                    carData.Rim_size,
                    carData.Image,
                    carData.Price
                    ]
            );
            return result;
        } catch (e){
            const error = e as Error;
            throw new Error(error.message);
        }
    }

    // updateCar ми е за PUT заявка, където трябва да подадем id на колата, която искаме да променим и данните, които искаме да променим.
    async updateCar(id: string, carData: any) {
        try {
            const [result] = await this.conn.query(
                "UPDATE cars SET ? WHERE id = ?",
                [carData, id]
            );
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
    // updateSpecificCar ми е за PUT заявка, където трябва да подадем id на колата, която искаме да променим и данните, които искаме да променим.
    async updateSpecificCar(id: string, carData: any) {
        try {
            const [result] = await this.conn.query(
                "UPDATE cars SET ? WHERE id = ?",
                [carData, id]
            );
            return result;
        } catch (e){
            const error = e as Error;
            throw new Error(error.message);
        }
    }
}
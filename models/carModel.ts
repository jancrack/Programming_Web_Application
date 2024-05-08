import {DB} from "../core/DB";

export class cars extends DB{
    async getAllCars() {
        try {
            const [rows] = await this.conn.query("SELECT * FROM cars");
            return rows;
        } catch (e){
            const error = e as Error;
            throw new Error(error.message);

        }


    }
}
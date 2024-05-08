import * as mysql2 from 'mysql2';
export class DB {
    conn;
    constructor() {
        this.conn = mysql2.createPool({
            host: "localhost",
            database: "web_application",
            user: "root",
            password: ""
        }).promise();
    }
}
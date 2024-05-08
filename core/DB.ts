import * as mysql2 from 'mysql2';
export class DB {
    conn;
    constructor() {
        this.conn = mysql2.createPool({
            host: "127.0.0.1",
            database: "web_application",
            user: "root",
            password: ""
        }).promise();
    }
}
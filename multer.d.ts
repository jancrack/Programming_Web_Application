declare module 'multer';
declare namespace Express {
    export interface Request {
        file?: any;
    }
}
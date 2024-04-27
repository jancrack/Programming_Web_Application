import express, {Application, Request, Response} from 'express';

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
        res.send({
            id: 1
        })
})
app.put("/", (req: Request, res: Response) => {
    res.send({
        id: 1
    })
})
app.post("/", (req: Request, res: Response) => {
    res.send({
        id: 1
    })
})
app.delete("/", (req: Request, res: Response) => {
    res.send({
        id: 1
    })
})
app.listen(3000, () => {
    console.log("Server started");
})
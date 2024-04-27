// @ts-ignore
import express, {Application, json, Request, Response} from 'express';

const app: Application = express();

app.use(json())
app.get("/api", (req: Request, res: Response) => {
        const params = req.query;
        console.log(params)
        res.send({
            id: 4
        })
})
app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "bravo"
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

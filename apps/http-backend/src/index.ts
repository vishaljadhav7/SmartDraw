import express, {Request, Response} from 'express';
import { prisma } from '@repo/db/clients';

const app = express();

const PORT = 4000;

app.get("/", (req : Request, res : Response) => {
    res.status(200).json("Healthy server")
});

app.listen(PORT , () => {
    console.log(`listening on  PORT : ${PORT}`)
})
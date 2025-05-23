import express from "express";
import cors from "cors";
import { controllerAtualizarLocal, controllerLocal } from "./Controllers/Controllers.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send('APi funcionando');
});
app.post("/cadastrar", controllerLocal);
app.put("/atualizar/:id_local", controllerAtualizarLocal)

app.listen(port, () => {
    console.log(`Funcionando na http://localhost:${port}`)
})
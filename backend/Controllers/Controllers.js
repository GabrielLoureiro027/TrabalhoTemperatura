import { cadastrarLocal } from "../Models/Models.js"

export const controllerLocal = (req, res) => {
    console.log("Controller :: controllerLocal")
    try{
        const [status,resposta] = cadastrarLocal(req, res)
        return res.status(status).json(resposta)
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Erro no servidor",
            sqlError: error.code,
            sqlMessage: error.sqlMessage
        })
    }
    }
export const listarLocais = async (req, res) => {
    console.log("Controller :: listarLocais")
    try {
        const [rows] = await conexao.execute("SELECT * FROM local");
        return res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro no servidor",
            sqlError: error.code,
            sqlMessage: error.sqlMessage
        });
    }
};
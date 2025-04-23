import { atualizarLocal, cadastrarLocal } from "../Models/Models.js"

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
export const controllerAtualizarLocal = (req, res) => {
    console.log("Controller :: controllerAtualizarLocal")
    try{
        const [status,resposta] = atualizarLocal(req, res)
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
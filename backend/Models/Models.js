import mysql from 'mysql2'
import db from '../conexao.js'
const conexao = mysql.createPool(db)

export const cadastrarLocal = (req, res) => {
    const {nome_local, cidade_local, estado_local, pais_local} = req.body
   

    try{
         const sql = `INSERT INTO local (nome_local, cidade_local, estado_local, pais_local) VALUES (?, ?, ?, ?)`
         const params = [nome_local, cidade_local, estado_local, pais_local]
         const resposta = conexao.query(sql, params)
         return [201,{message: 'Local cadastrado com sucesso'}]
    }catch(error){
        console.log(error)
        return [
            500,{
                mensage:"Error no Servidor",
                sql: error.code,
                sqlMessage: error.sqlMessage
            }
        ]
    }
    }
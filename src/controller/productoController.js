const conexion = require('../database/db')

const searchAllProduct = async(req,res) => {
    try {
        const sql = 'SELECT * FROM product'
        conexion.query(sql,(error,results)=>{
            if(error) throw error;
            if(results.length > 0){
                res.json(results);
            }else{
                res.send('no hay resultado')
            }
        })

    } catch (error) {
        console.error(error);
        funciones.error(error, req.originalUrl, res);

    }
};


const searchCategory = async(req,res) => {
    try {
        const {id}= req.params;
        const sql = `SELECT * FROM product where category = '${id}' `
        conexion.query(sql,(error,results)=>{
            if(error) throw error;
            if(results.length > 0){
                res.json(results);
            }else{
                res.send('no hay resultado')
            }
        })
    } catch (error) {
        console.error(error);
        funciones.error(error, req.originalUrl, res);

    }
};


module.exports = {
    searchAllProduct,searchCategory
}
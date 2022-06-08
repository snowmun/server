const conexion = require('../database/db')

const searchAllProduct = async(req,res) => {
    try {
        // haremos un select  a todo los datos de la tabla product y lo guardamos en una constante
        const sql = 'SELECT * FROM product'
        // haremos la comunicacion con nuestra base de datos en el cual nos guardara el resultado
        // en results en caso de generar un error eso nos enviara al catcha con el error 
        conexion.query(sql,(error,results)=>{
            if(error) throw error;
            if(results.length > 0){
                // entregamos el resultado mostrando todos los productos encontrados
                return res.status(200).json({
                    "status":true,
                    "message":"productos encontrados con exito",
                    "Data": results
                })
            }else{
                  // en caso de que no encuentre ningun producto este mandara un error 409
                    // y un mensaje que los productos no son encontrados
                return res.status(409).json({
                    "status":true,
                    "message":" productos no encontrados ",
                    "data": results,
                })
            }
        })

    } catch (error) {
        console.error(error);
        funciones.error(error, req.originalUrl, res);

    }
};


const searchCategory = async(req,res) => {
    try {
        // capturamos el id que se envia 
        const {id}= req.params;
        // con esta id haremos un where para filtrar por categoria
        const sql = `SELECT * FROM product where category = '${id}' `
         // haremos la comunicacion con nuestra base de datos en el cual nos guardara el resultado
        // en results en caso de generar un error eso nos enviara al catcha con el error 
        conexion.query(sql,(error,results)=>{
            if(error) throw error;
            if(results.length > 0){
                 // entregamos el resultado mostrando todos los productos encontrados
                return res.status(200).json({
                    "status":true,
                    "message":"productos encontrados con exito",
                    "Data": results
                })
            }else{
                return res.status(409).json({
                    // en caso de que no encuentre ningun producto este mandara un error 409
                    // y un mensaje que los productos no son encontrados
                    "status":true,
                    "message":" productos no encontrados ",
                    "data": results,
                })
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
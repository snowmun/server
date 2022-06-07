const conexion = require('../database/db')

const searchAllProduct = async(req,res) => {
    try {
        const allProduct = await conexion.query("SELECT * FROM product ORDER BY ASC" );
        console.log(allProduct)

    } catch (error) {
        console.error(error);
        funciones.error(error, req.originalUrl, res);

    }
};


const searchCategory = async(req,res) => {
    try {
        const {id} = req.params
        const oneCategory = await conexion.query(`SELECT * FROM product where id = ${id} ORDER BY ASC` );
        console.log(oneCategory)
    } catch (error) {
        console.error(error);
        funciones.error(error, req.originalUrl, res);

    }
};


module.exports = {
    searchAllProduct,searchCategory
}
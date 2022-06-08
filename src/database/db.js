const mysql = require('mysql');
// se crea base de datos con pool, este nos creara una duplicidad de la base de datos principal 
// y podemos utilizarla el tiempo que deseamos 
const pool   = mysql.createPool({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    database:"bsale_test",
    user:"bsale_test",
    password:"bsale_test"
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('conectada a la bd con exito');
  });


module.exports=pool  



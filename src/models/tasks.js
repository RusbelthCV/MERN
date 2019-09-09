const {con} = require('../database');


let cuponesModel = {};


cuponesModel.getCupones = (callback) => {
    if(con){
        con.query("SELECT * FROM cupones",(err,rows) => {
            if(err){
                throw err;
            }
            else{
                callback(null,rows);
            }
        })
    }
}

module.exports = cuponesModel;
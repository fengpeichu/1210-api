/*
 * @Author: 楚凤沛 
 * @Date: 2018-12-10 09:24:53 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-10 09:34:56
 */
var pool = require('mysql').createPool({
    port: "3306",
    user: "root",
    password: 'root',
    database: "1210"
})
module.exports = function(sele, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            return ck && ck(err);
        }
        con.query(sele, arr, function(err, result) {
            if (err) {
                return ck && ck(err);
            }
            ck && ck(null, result);
            con.release();
        })
    })
}
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'jlc4ever',
    database : 'ACG'
});

connection.connect();

connection.query('SELECT * from love_author', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
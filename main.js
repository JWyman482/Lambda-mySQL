var mysql = require('mysql');
var config = require('./config.json');
var util = require('util');

var pool = mysql.createPool({
    host: config.dbhost,
    user: config.dbuser,
    password: config.dbpass,
    database: config.dbname
});

pool.query = util.promisify(pool.query);

exports.handler = async (event) => {

    var result = "[]";
    var action = event['action'];

    if (action == "insert") {
        result = await insertItem(event['name']);
    }
    else if (action == "delete") {
        result = await deleteItem(event['item_id']);
    }
    else if (action == "update") {
        result = await updateItem(event['item_id'], event['name']);
    }
    else if (action == "get") {
        if ("id" in event) {
            result = getItem(event['item_id']);
        }
        else {
            result = listAll();
        }
    }
    //var result = await listAll();
    //var result = await getItem();
    //var result = await insertItem();
    //var result = await deleteItem();
    //var result = await updateItem();

    return result;
}

function listAll() {
    var result = pool.query('SELECT * FROM items;');
    return result;
}

function getItem(id) {
    var result = pool.query(`SELECT * FROM items WHERE item_id=${id};`);
    return result;
}

function insertItem(name) {
    var result = pool.query(`INSERT INTO items (name) VALUES ("${name}");`);
    return result;
}

function updateItem(id, name) {
    var result = pool.query(`UPDATE items set name="${name}" WHERE item_id=${id};`);
    return result;
}

function deleteItem(id) {
    var result = pool.query(`DELETE FROM items WHERE item_id=${id};`);
    return result;
}

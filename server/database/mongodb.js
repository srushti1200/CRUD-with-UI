const { MongoClient } = require("mongodb");
const mongoose =  require('mongoose');
const url = process.env.MONGO_URI;
database = 'College';
const client = new MongoClient(url);


async function dbConnect(){
    let result = await client.connect();
    db = result.db(database);
    console.log("connected");
    return db.collection('Student');

}

module.exports = dbConnect;
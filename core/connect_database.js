const { MongoClient } = require('mongodb');
const databaseConfig = require('../config/database');

module.exports = async function(collection_name){
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseConfig.mongodb.stringConnect, { useUnifiedTopology: true }, function(err, db){
            console.log('Database ' + collection_name + ' is connected');
            if(err) throw err;
            resolve(db.db(databaseConfig.mongodb.database).collection(collection_name))
            
            // db.close();
        })
    })
    
}


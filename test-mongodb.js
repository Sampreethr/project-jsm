// test-mongodb.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
console.log("Using URI:", uri);

async function testConnection() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const dbs = await client.db().admin().listDatabases();
    console.log("Available databases:");
    dbs.databases.forEach(db => console.log(` - ${db.name}`));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

testConnection();

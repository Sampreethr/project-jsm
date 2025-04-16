// test-mongo-connection.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
console.log("Testing connection with URI:", uri);

async function testConnection() {
  const client = new MongoClient(uri);
  
  try {
    console.log("Attempting to connect to MongoDB...");
    await client.connect();
    console.log("✅ Successfully connected to MongoDB!");
    
    // List databases to verify connection
    const dbs = await client.db().admin().listDatabases();
    console.log("\nAvailable databases:");
    dbs.databases.forEach(db => console.log(` - ${db.name}`));
    
    console.log("\nConnection test successful!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

testConnection();

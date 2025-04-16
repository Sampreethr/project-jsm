// check-mongodb-connection.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
console.log("MongoDB URI:", uri ? "URI is defined" : "URI is not defined");

async function checkConnection() {
  const client = new MongoClient(uri);
  
  try {
    console.log("Attempting to connect to MongoDB...");
    await client.connect();
    console.log("✅ Successfully connected to MongoDB");
    
    // List databases
    const adminDb = client.db().admin();
    const dbs = await adminDb.listDatabases();
    console.log("\nAvailable databases:");
    dbs.databases.forEach(db => console.log(` - ${db.name}`));
    
    // Check if devflow database exists
    const devflowExists = dbs.databases.some(db => db.name === 'devflow');
    console.log(`\nDevflow database exists: ${devflowExists ? 'Yes' : 'No'}`);
    
    if (devflowExists) {
      // List collections in devflow database
      const devflowDb = client.db('devflow');
      const collections = await devflowDb.listCollections().toArray();
      console.log("\nCollections in devflow database:");
      collections.forEach(collection => console.log(` - ${collection.name}`));
    }
    
    console.log("\nMongoDB connection test completed successfully");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    console.error("Full error:", error);
  } finally {
    await client.close();
    console.log("MongoDB connection closed");
  }
}

checkConnection();

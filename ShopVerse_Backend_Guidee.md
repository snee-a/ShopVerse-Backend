🛠️ ShopVerse Backend Setup (Express + MongoDB)
This guide walks you through the complete steps for setting up the backend of the ShopVerse project using Express.js and MongoDB.

✅ Step 1: Initialize the Backend Project
Create a new folder:
```
ShopVerse-Backend
```

Open this folder in VS Code.

Initialize package.json:
```js
npm init -y
```

Install required dependencies:
```
npm install express cors dotenv mongoose bcryptjs jsonwebtoken
```

express: Web framework

cors: Allow frontend-backend communication

dotenv: Load secret environment variables

mongoose: Connect and work with MongoDB

bcryptjs: Encrypt passwords

jsonwebtoken: Handle login authentication tokens

(Optional) Install nodemon for auto-restarting server during development:
```
npm install --save-dev nodemon
```

Update package.json scripts:
```
"scripts": {
"start": "node index.js",
"dev": "nodemon index.js"
}
```

✅ Step 2: Create Entry File
Create index.js file (either manually or using terminal):
```
touch index.js
```

Paste the following basic server setup code:

```
// Import modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Connect DB
const connectDB = require("./config/db");

// Initialize app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
res.send("Hey!");
});

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(Server is running on port ${PORT});
});
```

✅ Step 3: Setup MongoDB Atlas
Visit: https://www.mongodb.com/cloud/atlas and create an account.

Create a new project: ShopVerse

Create a Shared Cluster → AWS (Mumbai preferred)

Name your cluster (e.g. Cluster0)

Create a database user:

Username: pandeysneha953

Password: (choose a secure one)

Role: readWriteAnyDatabase or atlasAdmin

Go to Network Access → Click "Add Current IP Address"

Go to Database → Connect → Choose Drivers

Copy the connection string:
```
mongodb+srv://pandeysneha953:<password>@cluster0.xxxxx.mongodb.net/shopverse?retryWrites=true&w=majority
```

Add a .env file in your root folder:
```
MONGO_URL=mongodb+srv://pandeysneha953:<your-encoded-password>@cluster0.xxxxx.mongodb.net/shopverse?retryWrites=true&w=majority
PORT=5000
```

✅ Step 4: Create Folder Structure
Inside your root folder, create this structure:

arduino
Copy
Edit
ShopVerse-Backend/
├── config/
│   └── db.js
├── index.js
└── .env
✅ Step 5: MongoDB Connection File
Inside config/db.js, add the following code:

```
const mongoose = require("mongoose");

const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGO_URL);
console.log("MongoDB Connected");
} catch (error) {
console.error("MongoDB connection failed:", error.message);
process.exit(1);
}
};

module.exports = connectDB;
```

✅ Step 6: Run the Server
Start the backend in development mode:

```
npm run dev
```

Visit in browser:
http://localhost:5000

You should see:
Hey!

And in terminal:

Server is running on port 5000
MongoDB Connected
✅ Final Notes
Don't forget to add .env to .gitignore

Make sure MongoDB URI password is URL encoded if it contains special characters

Your backend is now ready to create models, routes, and APIs 🎉

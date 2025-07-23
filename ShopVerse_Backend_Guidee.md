***In this file I will be documenting the complete steps of setting up backend of ShopVerse***

## Steps-
 Create a folder ShopVerse-Backend . Open it with VS code.
    Run this command in terminal -
    ``` npm init -y``` 
    (install dependencies)

 then -

```js
    npm install express cors dotenv mongoose bcryptjs jsonwebtoken```

    express-create routes and server
    cors - connect backend and frontend
    dotenv- keep passwords and API safe
    mongoose - connect to MongoDB
    bcryptjs: encrypt passwords
    jsonwebtoken: for login token
    
if you dont already have nodemon then this -
```js
 npm install --save-dev nodemon```

Update this in package.json 
```"scripts": {
       "start": "node index.js",
        "dev": "nodemon index.js"
    }```

Now create a file index.js using - touch index.js or manually

Now in your index.js -
  ```js
  //import modules
        const express=require("express");
        const cors=require("cors");
        const mongoose=require("mongoose");
        require("dotenv").config();

    //initialise the app
        const app=express();

    //middlewares
        app.use(express.json());//this allows to get jSOn data
        app.use(cors());//connect frontend and backend

    //test route- 
        app.get("/",(req,res)=>{
            res.send("Hey!");
        });

    //connect to server
        let PORT=process.env.PORT || 5000;
        app.listen(PORT,()=>{
            console.log(`App is listening at the port ${PORT}`);
        })```

Now Complete MongoDb connecting process-
    Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas.
    Create a new project named ShopVerse.
    Inside the project, create a new Shared Cluster.
    Choose any cloud provider and region (AWS/Mumbai preferred for India).
    Name your cluster (e.g., Cluster0) and create it.
    Go to Database > Database Access, click "Add New Database User".
    Set username as pandeysneha953 and choose a secure password.
    Set Authentication Method as SCRAM (default).
    Assign role: atlasAdmin@admin (or just readWriteAnyDatabase for safety).
    Save the user.
    Go to Network Access and click “Add Current IP Address” to whitelist your system’s IP.
    Once IP is added, go to Database > Connect > Drivers tab.
    Copy the Node.js connection string (URI) starting with mongodb+srv://....
    Replace <password> with your actual password (URL encoded if it has special characters).
    Add this URI to your .env file in the backend project:

      ```js
    MONGO_URL=mongodb+srv://pandeysneha953:<your-encoded-password>@cluster0.xxxxx.mongodb.net/shopverse?retryWrites=true&w=majority
        PORT=5000```

Now create a folder config inside this create db.js
   ```js
     // Import mongoose library
        const mongoose = require("mongoose");

        // Create async function to connect to MongoDB
        const connectDB = async () => {
        try {
            // Connect to MongoDB using the URI from environment variables
            const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,        // Use new URL parser (recommended)
            useUnifiedTopology: true,     // Use new server discovery and monitoring engine
            });

            // Log success message with host info
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
            // If connection fails, log error and exit process
            console.error(`Error connecting to MongoDB: ${error.message}`);
            process.exit(1); // Exit with failure code
        }
        };

        // Export the connectDB function to use in index.js
        module.exports = connectDB;
```

Inside the index.js 
call connectDB function after importing the modules:-
 ```js
   connectDB();```

This basic setup is completed Backend setup done and mongoDB connected now we will work on frontend then come back to it again .

Now pushing this to github
   ```js
    git init
    git remote add origin https://github.com/username/reponame.git
    create a file .gitignore add this to it 
        node_modules
        .env
    git add .
    git commit -m "Initial backend setup with Express and MongoDB connection"
    git branch -M main
    git push -u origin main```




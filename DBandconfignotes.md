## Notes For Backend--

1. type - module = You can use Import statement in your JS files
   type - commonjs = You have to use Const Require statement in your JS files

2. You need to setup Prettier for your project to make sure every one is in same page--

   a. Install Prettier using --
   `       npm i -D prettier or bun i -D prettier
    `
   b. Create 2 files --
   `       .prettierrc
      .prettierignore
    `
   c. Prettierrc file will contain all the settings you want --

   ```
     {
       "singleQuote": false,
       "bracketSpacing": true,
       "tabWidth": 2,
       "trailingComma": "es5",
       "semi": true
     }

   ```

   d. Prettierignore will contain all those files which you do not want prettier to touch --

   ```
     /.vscode
     /node_modules
     ./dist
     *.env
     .env
     .env.*
   ```

3. Inorder to Hot reload your index.js everytime you change something or update your code you have to use Nodemon. This is also a Dev Dependency--

   a. Install Nodemon --

   ```
     npm i -D nodemon or bun i -D nodemon
   ```

   b. Update your package.json --

   ```
     "scripts": {
       "dev": "nodemon src/index.js"
     },
   ```

4. Inorder to handle your database you need Mongoose--

   a. Install mongoose --

   ```
     npm i mongoose or bun i mongoose
   ```

5. To connect your database using mongoose you need to remember following things --

   a. Database always takes time to connect so use Async method.
   b. Do not directly use mongoose connect method. Use a try catch to make the connection.
   c. Here is one way to connect your DB using IIFE --

   ```
     (async () => {
     try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("error", (error) => {
        console.log("Error: ", error);
     });

       app.listen(process.env.PORT, () => {
         console.log(`App Is Listening On : ${process.env.PORT}`);
       });
     } catch (error) {
         console.error(error);
       }
     })();

   ```

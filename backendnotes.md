# Here you will get complete backend notes --

## 1. How to setup and start a backend project --

    In order to start a backend project you have to create a

separate folder in your project folder.

```
Project1
    backend/
    frontend/

```

Now go into your backend folder.

Once you are inside the folder you have to use another feature of Node
which allow you to initialise an empty project. Below is the command --

```
npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (backend)
version: (1.0.0)
description:
entry point: (index.js) server.js
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/avi/Developer/Learnings/BackendNotes/test2/backend/package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)

```

Here Node will guide you by asking questions and you can setup your first backend.

When you feel like you are confident enough you can skip all this by using below command
and it will not ask a single question -- 

```
npm init -y
```

## Important --

Very important thing to note here is --

entry point: (index.js) server.js

This is your entry point of Backend. So whatever file name you give you have to remember that.

After this you have to run below command to install node modules in your backend --

```
npm install

```

## 2. How to setup your own script using Node --

    When you are done setting up your backend and initialising it than

you will see you only have a test script in your package.json. But you
will need a script to run your backend. To do that all you have to do
is add a new script in your package.json.

If you remember the way to run a javascript file in node js is --

```
node filename.js

```

The same thing we will do here as well. Lets give our script a name and
the command which we want it to run every time we use that script --

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"node server.js"
  },

```

Save your package.json and every time you want you can run this command --

```
npm run start

```

## 3. When to use module and when touse commonjs in Node --

    Node provide 2 types of bundle method. These bundle methods

are actually the way node understand how to bundle the whole project.
You can find that in your package.json file like below --

```

{
  "name": "backend",
  "module": "server.js",
  "type": "module",


```

module -- This means that the whole project will be treated as a Module based
system and you have to use "IMPORT STATEMENT" to use any method or
variable from a different file.

commonjs -- This means that the whole project will be treated as Common Js
system and you have to use "const xyz = require ("xyz")" to use
any method or variable from a different file.

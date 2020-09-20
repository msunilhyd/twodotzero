Project Set up
  nvm install 10
  nvm alias default 10
  node --version
  npm --version
  npm install -g npm@6
  npm init
  npm install express
  npm uninstall express
  npm install express@4

Express
  node server.js
  npm start

JSX Transform
  npm install --save-dev @babel/core@7 @babel/cli@7
  node_modules/.bin/babel --version
  npx babel --version
  npm install --save-dev @babel/preset-react@7
  npx babel src --presets @babel/react --out-dir public

Older Browsers Support
  npm install --no-save @babel/plugin-transform-arrow-functions@7
  npm babel src --presets @babel/react --plugins=@babel/plugins-      transform-arrow-functions --out-dir public
  npm uninstall @babel/plugin-transform-arrow-functions@7
  npm install --save-dev @babel/preset-env
  npx babel src --out-dir public


Automate
  npm install nodemon@1

Chapter 5: Express GraphQL APIs
  About API
    npm install graphql@0 apollo-server-express@2
    curl "http://localhost:3000/graphql?query=query+\{+about+\}"

Chapter 6: MongoDB
  MongoDB Node.js Driver

    npm install mongodb@3
    mongo issuetracker --eval "db.employees.remove({})"
    node scripts/trymongo.js

  Schema Initialization
    mongo issuetracker scripts/init.mongo.js

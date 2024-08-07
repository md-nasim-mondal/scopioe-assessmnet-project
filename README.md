## To run this project locally, follow these steps:

1. _Clone the Repository_

2. _Install Dependencies_
   -pm install

- For backend dependencies, navigate to the backend directory and run:

  npm install

3. _Configure Firebase Keys_

- Add your Firebase configuration keys to a .env.local file in the project root:

  FIREBASE_API_KEY=<your-api-key>
  FIREBASE_AUTH_DOMAIN=<your-auth-domain>
  FIREBASE_PROJECT_ID=<your-project-id>

4. _Start the Backend Server_

- Use nodemon to start the backend server:

  nodemon index.js

- Ensure MongoDB URI, username, and password are set in a .env file in the backend directory:

  MONGODB_URI=<your-mongodb-uri>
  DB_USERNAME=<your-db-username>
  DB_PASSWORD=<your-db-password>
  ACCESS_TOKEN_SECRET=<your-personal-secret-key>

5. _Set Environment Variables_

- Update .env.local or .env with necessary variables, for example:

  VITE_API_URL='http://localhost:8000'
  VITE_IMGBB_API_KEY= 'Your imgbb account api key'

6. _Start the Frontend Server_

Follow these steps to clone, configure, and run the project locally.
localhost
Navigate to the project directory and install frontend dependencies:

npm install

- For backend dependencies, navigate to the backend directory and run:

  npm install

Follow these steps to clone, configure, and run the project locally.
localhost

**Front-end Live Site Link**: [Scopioe-Assessment](https://scopioe-assessment1.netlify.app)

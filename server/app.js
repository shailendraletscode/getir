import express from 'express';
import routes from './routes';
import db from './database/db';
import {ErrorHandler} from './utils';
const app = express();
// for environment variable
require('dotenv').config();
// Connect to mongo
db.connect(process.env.MONGO_URL);
// Parse json body
app.use(express.json());

// Parse url encoded data
app.use(
    express.urlencoded({
      extended: true,
    }),
);

app.use('/', routes);

// Express error handler
app.use((err, req, res, next)=> {
  res.status(500).json({code: 500, message: 'Internal server error', records: []});
});
// Handle 404 route
app.use((req, res, next)=> {
  return ErrorHandler.sendErrorResponse('NotFound', 'Invalid request Url', res);
});

export default app;


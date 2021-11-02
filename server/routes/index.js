import express from 'express';
import {Records} from '../controller';
import {validation} from '../validations';
console.log('Records: ', Records);
// eslint-disable-next-line new-cap
const router = express.Router();

// Handle post request to get records
router.post(
    '/getrecords',
    validation.validateRules(),
    validation.validate,
    Records.getRecords,
);

export default router;

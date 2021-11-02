/* eslint-disable max-len */
import {body, validationResult} from 'express-validator';
import {ErrorHandler} from '../utils';

export default {
  /**
   *
   * @return {Array} Set of rules to validate request body
   */
  validateRules: () => {
    return [
      body('startDate').trim().isDate({format: 'YYYY-MM-DD', strictMode: true}),
      body('endDate').trim().isDate({format: 'YYYY-MM-DD', strictMode: true}),
      body('minCount').isInt(),
      body('maxCount').isInt(),
    ];
  },
  // Middleware to send error response if request body is not proper
  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((e)=> e.param).join(', ');
      return ErrorHandler.sendErrorResponse('BadRequest', `Invalid ${errorMessage}`, res);
    }
    next();
  },
};

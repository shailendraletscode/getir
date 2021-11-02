import {Records} from '../models';
export default {
  getRecords: async (req, res) => {
    try {
      // Extract parameters from request body
      const {startDate, endDate, minCount, maxCount} = req.body;
      const data = await Records.aggregate([
        {
          $project: {
            key: 1,
            createdAt: 1,
            totalCount: {
              $sum: '$counts',
            },
          },
        },
        {
          $match: {
            $and: [
              {
                createdAt: {$gte: new Date(startDate), $lte: new Date(endDate)},
              },
              {
                totalCount: {$gte: minCount, $lte: maxCount},
              },
            ],
          },
        },
      ]);
      // Send success response
      res.send({
        code: 0,
        message: 'Success',
        records: data,
      });
    } catch (err) {
      res.send({
        code: 500,
        message: 'Internal server error',
        records: [],
      });
    }
  },
};

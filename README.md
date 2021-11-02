# APIs for getir

### Dependencies

    - Nodejs installed version 15.6.0

### Local Setup steps

    1. Clone repository - git clone https://github.com/shailendraletscode/getir.git
    2. npm i
    3. .env file provide the MONGO_URL
        MONGO_URL=""
    3. npm run start-dev

### Production run

    - npm run start

We are using babel to transpile es6 code.

### Eslint

    1. Running eslint - ./node_modules/.bin/eslint ./server
    2. Fixable errors - ./node_modules/.bin/eslint ./server --fix

### Jest test run

    - npm run test

### REST API

#### Request

    - POST /getrecords
    - Sample Request body
        {
            "startDate":"2015-06-01",
            "endDate": "2015-07-03",
            "minCount": 2000,
            "maxCount": 2500
        }
    - Sample Response
        {
            "code": 0,
            "message": "Success",
            "records": [
                {
                    "key": "bZTEhibw",
                    "createdAt": "2015-06-30T22:22:41.979Z",
                    "totalCount": 2260
                },
                {
                    "key": "HGnNNXwF",
                    "createdAt": "2015-06-18T22:11:18.893Z",
                    "totalCount": 2320
                },
                {
                    "key": "qtiLtFeV",
                    "createdAt": "2015-06-13T18:55:26.258Z",
                    "totalCount": 2169
                },
                {
                    "key": "aIXHMLLu",
                    "createdAt": "2015-06-09T13:34:16.726Z",
                    "totalCount": 2472
                },
                {
                    "key": "sNrphIkF",
                    "createdAt": "2015-06-06T02:57:12.159Z",
                    "totalCount": 2286
                }
            ]
        }

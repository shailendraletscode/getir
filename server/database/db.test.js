import {default as db} from './db';

describe('Mongo connection', ()=> {
  it('DB connection', async ()=> {
    await db.connect(process.env.MONGO_URL);
  });

  it('DB close connection', async ()=> {
    await db.close();
  });
});

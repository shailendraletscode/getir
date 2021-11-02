import mongoose from 'mongoose';

export default {
  // Connect to mongo
  connect: async (mongoUrl) => {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
  // Close connection
  close: async ()=> {
    await mongoose.connection.close();
  },
};

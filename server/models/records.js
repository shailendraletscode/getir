import mongoose from 'mongoose';

// eslint-disable-next-line new-cap
const schema = mongoose.Schema({
  key: String,
  createdAt: Date,
  counts: [Number],
  value: String,
});

export default mongoose.model('records', schema);

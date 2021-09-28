import mongoose from 'mongoose';
const {Schema, model} = mongoose;
const Types = Schema.Types;
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
      default: '',
    },
    attachment: String,
    likeCount: {
      type: [Types.ObjectId],
      default: 0,
    },
  },
  { timestamps: true }
);

export const PostModel = mongoose.model('Post', schema);
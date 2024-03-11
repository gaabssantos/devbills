import mongoose from 'mongoose';

export async function setupMongo(): Promise<void> {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    console.log('🎲 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log('🎉 MongoDB connected.');
  } catch (err) {
    console.log(err);
  }
}

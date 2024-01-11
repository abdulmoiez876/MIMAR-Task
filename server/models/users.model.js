import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    seller: {
        type: Boolean,
        required: true,
    }
});

userSchema.index({ username: 1, seller: 1 }, { unique: true });

export default mongoose.model('User', userSchema);

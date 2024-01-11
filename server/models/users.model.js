import mongoose from 'mongoose';

export default mongoose.model('User', mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    seller: {
        type: Boolean,
        required: true,
    }
}))
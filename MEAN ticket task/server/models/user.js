import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    id: {
        type: String
    }
});

export default mongoose.model("User", userSchema);
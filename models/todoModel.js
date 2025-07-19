import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        course: { type: String, ref: "CourseModel" },
        description: String,
        points: Number,
        module: String,
        due_date: String,
        available_date: String,
        until_date: String,
    },
    { collection: "assignments" }
);

export default schema;
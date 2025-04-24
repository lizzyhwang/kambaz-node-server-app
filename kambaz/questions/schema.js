import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        title: { type: String, default: "Question Title" },
        question: { type: String, default: "Question" },
        quiz: { type: String, ref: "QuizModel", required: true },
        type: { type: Number, default: 0 },
        points: { type: Number, default: 1 },
        choices: [String],
        answer: String,
        isTrue: { type: Boolean, default: false }
    },
    { collection: "questions" }
);

export default schema;
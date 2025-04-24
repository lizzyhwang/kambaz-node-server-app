import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        question: String,
        quiz: { type: String, ref: "QuizModel", required: true },
        type: Number, // 0=MC, 1=T/F, 2=fill-in-the-blank
        points: Number,
        choices: [String],
        answer: Boolean | String,
    },
    { collection: "questions" }
);

export default schema;
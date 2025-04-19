import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        description: String,
        course: { type: String, ref: "CourseModel", required: true },
        type: {
            type: String,
            enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
            default: "GRADED_QUIZ",
        },
        points: Number,
        assignment_group: {
            type: Number,
            enum: ["ASSIGNMENTS", "QUIZ", "EXAM", "PROJECT"],
            default: "QUIZ",
        },
        shuffle_answers: { type: Boolean, default: true },
        time_limit: { type: Number, default: 20 },
        multiple_attempts: { type: Boolean, default: false },
        how_many_attempts: { type: Number, default: 1 },
        show_correct_answers: {
            enabled: Boolean,
            when_to_show: String,
        },
        access_code: { type: String, default: "" },
        one_question_at_a_time: { type: Boolean, default: true },
        webcam_required: { type: Boolean, default: false },
        lock_after_answering: { type: Boolean, default: false },
        due_date: String,
        available_date: String,
        until_date: String,

    },
    { collection: "quizzes" }
);

export default schema;
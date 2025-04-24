import * as quizzesDao from "./dao.js"
import * as questionsDao from "../questions/dao.js"

export default function QuizzesRoutes(app) {
    app.get("/api/quizzes/:quizId", async (req, res) => {
        const quiz = await quizzesDao.findQuizById(req.params.quizId);
        res.json(quiz);
    })

    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    })

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    })

    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionsDao.findQuestionsForQuiz(quizId);
        res.json(questions);
    })

    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = {
            ...req.body,
            quiz: quizId,
        }
        const newQuestion = await questionsDao.createQuestion(question);
        res.json(newQuestion);
    })
}
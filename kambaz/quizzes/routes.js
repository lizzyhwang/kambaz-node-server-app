import * as quizzesDao from "./dao.js"

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
}
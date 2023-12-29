const Questions = require('../models/questionSchema')
const Results = require('../models/resultSchema')
const { questions, answers } = require('../database/data');
const QuestionStruk = require('../models/questionStrukSchema')
const ResultStruk = require('../models/resultStrukSchema')
const { questionsStruk, answerStruk } = require('../database/dataStruk');
const QuestionBim = require('../models/questionBimSchema')
const ResultBim = require('../models/resultBimSchema')
const { questionBim, answerBim } = require('../database/dataBim')
const QuestionMan = require('../models/questionManSchema')
const ResultMan = require('../models/resultManSchema')
const { questionMan, answerMan } = require('../database/dataMan')
const QuestionStruk2 = require('../models/questionStruk2Schema')
const ResultStruk2 = require('../models/resultStruk2Schema')
const { questionsStruk2, answerStruk2 } = require('../database/dataStruk2');
const QuestionBim2 = require('../models/questionBim2Schema')
const ResultBim2 = require('../models/resultBim2Schema')
const { questionBim2, answerBim2 } = require('../database/dataBim2')
const QuestionMan2 = require('../models/questionMan2Schema')
const ResultMan2 = require('../models/resultMan2Schema')
const QuestionPost = require('../models/questionPostSchema')
const ResultPost = require('../models/resultPostSchema')
const { questionPost, answerPost } = require('../database/dataPost')
const QuestionPost2 = require('../models/questionPost2Schema')
const ResultPost2 = require('../models/resultPost2Schema')
const { questionPost2, answerPost2 } = require('../database/dataPost2')
const QuestionStruk3 = require('../models/questionStruk3Schema')
const ResultStruk3 = require('../models/resultStruk3Schema')
const { questionsStruk3, answerStruk3 } = require('../database/dataStruk3');
const QuestionStruk4 = require('../models/questionStruk4Schema')
const ResultStruk4 = require('../models/resultStruk4Schema')
const { questionsStruk4, answerStruk4 } = require('../database/dataStruk4');
const QuestionStruk5 = require('../models/questionStruk5Schema')
const ResultStruk5 = require('../models/resultStruk5Schema')
const { questionsStruk5, answerStruk5 } = require('../database/dataStruk5');
const QuestionStruk6 = require('../models/questionStruk6Schema')
const ResultStruk6 = require('../models/resultStruk6Schema')
const { questionsStruk6, answerStruk6 } = require('../database/dataStruk6');

async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestion(req, res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResult(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResult(req, res){
    try{
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}

/** Terstruktur */
async function getQuestionStruk(req, res) {
    try {
        const q = await QuestionStruk.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionStruk(req, res){
    try {
        QuestionStruk.insertMany({ questionsStruk, answerStruk }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionStruk(req, res){
    try {
        await QuestionStruk.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultStruk(req, res){
    try {
        const r = await ResultStruk.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultStruk(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultStruk.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultStruk(req, res){
    try{
        const { name } = req.query
        await ResultStruk.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** =========== */


/** Terbimbing */
async function getQuestionBim(req, res) {
    try {
        const q = await QuestionBim.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionBim(req, res){
    try {
        QuestionBim.insertMany({ questionBim, answerBim }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionBim(req, res){
    try {
        await QuestionBim.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultBim(req, res){
    try {
        const r = await ResultBim.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultBim(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultBim.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultBim(req, res){
    try{
        const { name } = req.query
        await ResultBim.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ========== */


/** Mandiri */
async function getQuestionMan(req, res) {
    try {
        const q = await QuestionMan.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionMan(req, res){
    try {
        QuestionMan.insertMany({ questionMan, answerMan }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionMan(req, res){
    try {
        await QuestionMan.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultMan(req, res){
    try {
        const r = await ResultMan.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultMan(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultMan.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultMan(req, res){
    try{
        const { name } = req.query
        await ResultMan.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ======= */

/** Terstruktur2 */
async function getQuestionStruk2(req, res) {
    try {
        const q = await QuestionStruk2.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionStruk2(req, res){
    try {
        QuestionStruk2.insertMany({ questionsStruk2, answerStruk2 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionStruk2(req, res){
    try {
        await QuestionStruk2.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultStruk2(req, res){
    try {
        const r = await ResultStruk2.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultStruk2(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultStruk2.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultStruk2(req, res){
    try{
        const { name } = req.query
        await ResultStruk2.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ============ */

/** Terbimbing 2 */
async function getQuestionBim2(req, res) {
    try {
        const q = await QuestionBim2.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionBim2(req, res){
    try {
        QuestionBim2.insertMany({ questionBim2, answerBim2 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionBim2(req, res){
    try {
        await QuestionBim2.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultBim2(req, res){
    try {
        const r = await ResultBim2.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultBim2(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultBim2.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultBim2(req, res){
    try{
        const { name } = req.query
        await ResultBim2.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ============ */

/** Mandiri 2 */
async function getQuestionMan2(req, res) {
    try {
        const q = await QuestionMan2.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionMan2(req, res){
    try {
        QuestionMan2.insertMany({ questionMan2, answerMan2 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionMan2(req, res){
    try {
        await QuestionMan2.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultMan2(req, res){
    try {
        const r = await ResultMan2.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultMan2(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultMan2.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultMan2(req, res){
    try{
        const { name } = req.query
        await ResultMan2.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ========= */

/** Posttest */
async function getQuestionPost(req, res) {
    try {
        const q = await QuestionPost.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionPost(req, res){
    try {
        QuestionPost.insertMany({ questionPost, answerPost }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionPost(req, res){
    try {
        await QuestionPost.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultPost(req, res){
    try {
        const r = await ResultPost.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultPost(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultPost.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultPost(req, res){
    try{
        const { name } = req.query
        await ResultPost.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ======== */

/** Posttest 2 */
async function getQuestionPost2(req, res) {
    try {
        const q = await QuestionPost2.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionPost2(req, res){
    try {
        QuestionPost2.insertMany({ questionPost2, answerPost2 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionPost2(req, res){
    try {
        await QuestionPost2.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultPost2(req, res){
    try {
        const r = await ResultPost2.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultPost2(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultPost2.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultPost2(req, res){
    try{
        const { name } = req.query
        await ResultPost2.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ========== */

/** Terstruktur3 */
async function getQuestionStruk3(req, res) {
    try {
        const q = await QuestionStruk3.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionStruk3(req, res){
    try {
        QuestionStruk3.insertMany({ questionsStruk3, answerStruk3 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionStruk3(req, res){
    try {
        await QuestionStruk3.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultStruk3(req, res){
    try {
        const r = await ResultStruk3.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultStruk3(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultStruk3.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultStruk3(req, res){
    try{
        const { name } = req.query
        await ResultStruk3.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ============ */

/** Terstruktur4 */
async function getQuestionStruk4(req, res) {
    try {
        const q = await QuestionStruk4.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionStruk4(req, res){
    try {
        QuestionStruk4.insertMany({ questionsStruk4, answerStruk4 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionStruk4(req, res){
    try {
        await QuestionStruk4.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultStruk4(req, res){
    try {
        const r = await ResultStruk4.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultStruk4(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultStruk4.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultStruk4(req, res){
    try{
        const { name } = req.query
        await ResultStruk4.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ============ */

/** Terstruktur5 */
async function getQuestionStruk5(req, res) {
    try {
        const q = await QuestionStruk5.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionStruk5(req, res){
    try {
        QuestionStruk5.insertMany({ questionsStruk5, answerStruk5 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionStruk5(req, res){
    try {
        await QuestionStruk5.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultStruk5(req, res){
    try {
        const r = await ResultStruk5.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultStruk5(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultStruk5.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultStruk5(req, res){
    try{
        const { name } = req.query
        await ResultStruk5.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ============ */

/** Terstruktur6 */
async function getQuestionStruk6(req, res) {
    try {
        const q = await QuestionStruk6.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionStruk6(req, res){
    try {
        QuestionStruk6.insertMany({ questionsStruk6, answerStruk6 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionStruk6(req, res){
    try {
        await QuestionStruk6.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultStruk6(req, res){
    try {
        const r = await ResultStruk6.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultStruk6(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultStruk6.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultStruk6(req, res){
    try{
        const { name } = req.query
        await ResultStruk6.findOneAndDelete({username: name});
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ============ */

module.exports = {
    getQuestions,
    insertQuestions,
    dropQuestion,
    getResult,
    storeResult,
    dropResult,
    getQuestionStruk,
    insertQuestionStruk,
    dropQuestionStruk,
    getResultStruk,
    storeResultStruk,
    dropResultStruk,
    getQuestionBim,
    insertQuestionBim,
    dropQuestionBim,
    getResultBim,
    storeResultBim,
    dropResultBim,
    getQuestionMan,
    insertQuestionMan,
    dropQuestionMan,
    getResultMan,
    storeResultMan,
    dropResultMan,
    getQuestionStruk2,
    insertQuestionStruk2,
    dropQuestionStruk2,
    getResultStruk2,
    storeResultStruk2,
    dropResultStruk2,
    getQuestionBim2,
    insertQuestionBim2,
    dropQuestionBim2,
    getResultBim2,
    storeResultBim2,
    dropResultBim2,
    getQuestionMan2,
    insertQuestionMan2,
    dropQuestionMan2,
    getResultMan2,
    storeResultMan2,
    dropResultMan2,
    getQuestionPost,
    insertQuestionPost,
    dropQuestionPost,
    getResultPost,
    storeResultPost,
    dropResultPost,
    getQuestionPost2,
    insertQuestionPost2,
    dropQuestionPost2,
    getResultPost2,
    storeResultPost2,
    dropResultPost2,
    getQuestionStruk3,
    insertQuestionStruk3,
    dropQuestionStruk3,
    getResultStruk3,
    storeResultStruk3,
    dropResultStruk3,
    getQuestionStruk4,
    insertQuestionStruk4,
    dropQuestionStruk4,
    getResultStruk4,
    storeResultStruk4,
    dropResultStruk4,
    getQuestionStruk5,
    insertQuestionStruk5,
    dropQuestionStruk5,
    getResultStruk5,
    storeResultStruk5,
    dropResultStruk5,
    getQuestionStruk6,
    insertQuestionStruk6,
    dropQuestionStruk6,
    getResultStruk6,
    storeResultStruk6,
    dropResultStruk6,
};
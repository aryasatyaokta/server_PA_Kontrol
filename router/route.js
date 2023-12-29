const { Router } = require("express");
const router = Router();
const controller = require('../controller/controller')

router.get('/questions', controller.getQuestions)
router.post('/questions', controller.insertQuestions)

router.route('/questions')
        .get(controller.getQuestions)
        .post(controller.insertQuestions)
        .delete(controller.dropQuestion)

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

/** Terstruktur */
router.get('/questionsstruk', controller.getQuestionStruk)
router.post('/questionsstruk', controller.insertQuestionStruk)

router.route('/questionsstruk')
        .get(controller.getQuestionStruk)
        .post(controller.insertQuestionStruk)
        .delete(controller.dropQuestionStruk)

router.route('/resultstruk')
        .get(controller.getResultStruk)
        .post(controller.storeResultStruk)
        .delete(controller.dropResultStruk)
/** =========== */


/** Terbimbing */
router.get('/questionbim', controller.getQuestionBim)
router.post('/questionbim', controller.insertQuestionBim)

router.route('/questionbim')
        .get(controller.getQuestionBim)
        .post(controller.insertQuestionBim)
        .delete(controller.dropQuestionBim)

router.route('/resultbim')
        .get(controller.getResultBim)
        .post(controller.storeResultBim)
        .delete(controller.dropResultBim)
/** ========== */

/** Mandiri */
router.get('/questionman', controller.getQuestionMan)
router.post('/questionman', controller.insertQuestionMan)

router.route('/questionman')
        .get(controller.getQuestionMan)
        .post(controller.insertQuestionMan)
        .delete(controller.dropQuestionMan)

router.route('/resultman')
        .get(controller.getResultMan)
        .post(controller.storeResultMan)
        .delete(controller.dropResultMan)
/** ======= */

/** Terstruktur 2 */
router.get('/questionstruk2', controller.getQuestionStruk2)
router.post('/questionsstruk2', controller.insertQuestionStruk2)

router.route('/questionstruk2')
        .get(controller.getQuestionStruk2)
        .post(controller.insertQuestionStruk2)
        .delete(controller.dropQuestionStruk2)

router.route('/resultstruk2')
        .get(controller.getResultStruk2)
        .post(controller.storeResultStruk2)
        .delete(controller.dropResultStruk2)
/** ============= */

/** Terbimbing 2 */
router.get('/questionbim2', controller.getQuestionBim2)
router.post('/questionbim2', controller.insertQuestionBim2)

router.route('/questionbim2')
        .get(controller.getQuestionBim2)
        .post(controller.insertQuestionBim2)
        .delete(controller.dropQuestionBim2)

router.route('/resultbim2')
        .get(controller.getResultBim2)
        .post(controller.storeResultBim2)
        .delete(controller.dropResultBim2)
/** ============ */


/** Mandiri 2 */
router.get('/questionman2', controller.getQuestionMan2)
router.post('/questionman2', controller.insertQuestionMan2)

router.route('/questionman2')
        .get(controller.getQuestionMan2)
        .post(controller.insertQuestionMan2)
        .delete(controller.dropQuestionMan2)

router.route('/resultman2')
        .get(controller.getResultMan2)
        .post(controller.storeResultMan2)
        .delete(controller.dropResultMan2)
/** ========= */

/** Posttest */
router.get('/questionpost', controller.getQuestionPost)
router.post('/questionpost', controller.insertQuestionPost)

router.route('/questionpost')
        .get(controller.getQuestionPost)
        .post(controller.insertQuestionPost)
        .delete(controller.dropQuestionPost)

router.route('/resultpost')
        .get(controller.getResultPost)
        .post(controller.storeResultPost)
        .delete(controller.dropResultPost)
/** ========= */

/** Posttest2 */
router.get('/questionpost2', controller.getQuestionPost2)
router.post('/questionpost2', controller.insertQuestionPost2)

router.route('/questionpost2')
        .get(controller.getQuestionPost2)
        .post(controller.insertQuestionPost2)
        .delete(controller.dropQuestionPost2)

router.route('/resultpost2')
        .get(controller.getResultPost2)
        .post(controller.storeResultPost2)
        .delete(controller.dropResultPost2)
/** ========= */

/** Terstruktur 3 */
router.get('/questionstruk3', controller.getQuestionStruk3)
router.post('/questionsstruk3', controller.insertQuestionStruk3)

router.route('/questionstruk3')
        .get(controller.getQuestionStruk3)
        .post(controller.insertQuestionStruk3)
        .delete(controller.dropQuestionStruk3)

router.route('/resultstruk3')
        .get(controller.getResultStruk3)
        .post(controller.storeResultStruk3)
        .delete(controller.dropResultStruk3)
/** ============= */

/** Terstruktur 4 */
router.get('/questionstruk4', controller.getQuestionStruk4)
router.post('/questionsstruk4', controller.insertQuestionStruk4)

router.route('/questionstruk4')
        .get(controller.getQuestionStruk4)
        .post(controller.insertQuestionStruk4)
        .delete(controller.dropQuestionStruk4)

router.route('/resultstruk4')
        .get(controller.getResultStruk4)
        .post(controller.storeResultStruk4)
        .delete(controller.dropResultStruk4)
/** ============= */

/** Terstruktur 5 */
router.get('/questionstruk5', controller.getQuestionStruk5)
router.post('/questionsstruk5', controller.insertQuestionStruk5)

router.route('/questionstruk5')
        .get(controller.getQuestionStruk5)
        .post(controller.insertQuestionStruk5)
        .delete(controller.dropQuestionStruk5)

router.route('/resultstruk5')
        .get(controller.getResultStruk5)
        .post(controller.storeResultStruk5)
        .delete(controller.dropResultStruk5)
/** ============= */

/** Terstruktur 6 */
router.get('/questionstruk6', controller.getQuestionStruk6)
router.post('/questionsstruk6', controller.insertQuestionStruk6)

router.route('/questionstruk6')
        .get(controller.getQuestionStruk6)
        .post(controller.insertQuestionStruk6)
        .delete(controller.dropQuestionStruk6)

router.route('/resultstruk6')
        .get(controller.getResultStruk6)
        .post(controller.storeResultStruk6)
        .delete(controller.dropResultStruk6)
/** ============= */

module.exports = router;

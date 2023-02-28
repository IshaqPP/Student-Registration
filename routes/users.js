var express = require('express');
var router = express.Router();
var db = require('../Configure/Connection')
const Collection = require('../Configure/Collection')

/* GET users listing. */
router.get('/', async function (req, res) {
  console.log("ur in Result");
  try {
    const student = await db.get().collection(Collection.STUDENT_COLLECTION).find().sort({ mark: -1 }).skip(1).limit(1).toArray()
    console.log(student);
    res.send(student)
  } catch (error) {
    console.log("Registration Error" + error);
  }
});

module.exports = router;

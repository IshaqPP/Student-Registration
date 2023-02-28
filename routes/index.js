var express = require('express');
var router = express.Router();

var db = require('../Configure/Connection')
const collection = require('../Configure/Collection')

/* GET home page. */
router.post('/', async function (req, res) {
  console.log("ur in registration");
  try {                  
    const StudentData = req.body;
    console.log(StudentData);
    await db.get().collection(collection.STUDENT_COLLECTION).insertMany(StudentData)
  } catch (error) {
    console.log("Registration Error" + error);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const service = require("../../models/connect_service");
const bodyParser = require("body-parser");


var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

router.get("/:id", urlencodedParser, function (req, res, next) {
  let id = req.params.id
  let sql = `exec spGetServiceLists ${id}`
  service.query(sql, function (response) {
    res.status(200).json(response)
  })
})

module.exports = router;
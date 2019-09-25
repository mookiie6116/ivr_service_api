const express = require("express");
const router = express.Router();
const service = require("../../models/connect_service");
const bodyParser = require("body-parser");


var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

router.get("/:id", urlencodedParser, function (req, res, next) {
  let id = parseInt(req.params.id)
  let sql = `exec spGetServiceLists ${id}`
  service.query(sql, function (response) {
    res.status(200).json(response)
  })
})

router.get("/id/:id", urlencodedParser, function (req, res, next) {
  let id = parseInt(req.params.id)
  let sql = `SELECT Service_Id, Service_c FROM Service WHERE Service_Id = ${id}`
  service.query(sql, function (response) {
    res.status(200).json(response)
  })
})

module.exports = router;
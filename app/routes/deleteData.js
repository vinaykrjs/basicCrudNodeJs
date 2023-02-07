let dataBase = require('../../dataBase/sampleData.json');
var _ = require('underscore');

async function deleteDataUsingQueryAPI(req, res) {
  console.log("deleteDataUsingQueryAPI calling...");
  // console.log("body", req.body);
  let queryParams = req.query;
  try {
    let accountInfo = dataBase.filter(element => element.accountNumber == queryParams.accountNumber);
    if (accountInfo.length) {
      // if account is already exists, not inserted
      dataBase.splice(dataBase.indexOf(accountInfo[0]), 1);
      res.status(202).send(dataBase);
    }
    else {
      res.status(404).send(`accountInfo does not exists, so can not delete`)
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
}

async function deleteDataUsingParamsAPI(req, res) {
  console.log("deleteDataUsingParamsAPI calling...");
  let params = req.params;
  try {
    let accountInfo = dataBase.filter(element => element.accountNumber == params.accountNumber);
    if (accountInfo.length) {
      // if account is already exists, not inserted
      dataBase.splice(dataBase.indexOf(accountInfo[0]), 1);
      res.status(202).send(dataBase);
    }
    else {
      res.status(404).send(`accountInfo does not exists, so can not delete`)
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = { deleteDataUsingParamsAPI, deleteDataUsingQueryAPI };

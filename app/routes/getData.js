let dataBase = require('../../dataBase/sampleData.json')
async function getDataUsingQueryAPI(req, res) {
  console.log("getDataUsingParamsAPI calling...");
  console.log("body", req.body);
  let queryParams = req.query;
  try {
    let accountInfo = dataBase.filter(element => element.accountNumber == queryParams.accountNumber);
    res.status(200).send(`${JSON.stringify(accountInfo)}`)
  }
  catch (err) {
    console.log(err);
    return err;
  }
}
async function getDataUsingParamsAPI(req, res) {
  console.log("getDataUsingParamsAPI calling...");
  let params = req.params;
  try {
      let accountInfo = dataBase.filter(element => element.accountNumber == params.accountNumber);
      res.status(200).send(`${JSON.stringify(accountInfo)}`)
  }
  catch (err) {
    console.log(err);
    return err;
  }
}

async function getAllDataAPI(req, res) {
  console.log("getAllDataAPI calling...");
  try {
      res.status(200).send(`${JSON.stringify(dataBase)}`)
  }
  catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = { getDataUsingQueryAPI, getDataUsingParamsAPI, getAllDataAPI };

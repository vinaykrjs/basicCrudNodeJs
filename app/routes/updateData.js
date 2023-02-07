let dataBase = require('../../dataBase/sampleData.json');
var _ = require('underscore');
async function updateData(req, res) {
  console.log("postData calling...");
  let body = req.body;
  try {
    // checking accounts exists or not
    let accountInfo = dataBase.filter(element => element.accountNumber == body.accountNumber);
    // console.log('accountInfo', accountInfo);
    if (accountInfo.length) {
      // if account is already exists, not inserted
      dataBase.splice(dataBase.indexOf(accountInfo[0]), 1, body)
      res.status(202).send(dataBase);
    }
    else {
      res.status(404).send(`accountInfo does not exists, so can not update`)
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = { updateData };

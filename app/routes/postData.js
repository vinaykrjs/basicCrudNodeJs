let dataBase = require('../../dataBase/sampleData.json')
async function postData(req, res) {
  console.log("postData calling...");
  let body = req.body;
  try {
    // checking accounts exists or not
    let accountInfo = dataBase.filter(element => element.accountNumber == body.accountNumber);
    if(accountInfo.length){
      // if account is already exists, not inserted
      res.status(400).send(`${JSON.stringify(accountInfo) }is not inserted,it is already exists`)
    } else {
      dataBase.push(body);
      res.status(201).send(`${JSON.stringify(body) }is inserted`)
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = { postData };

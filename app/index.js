const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());

// modules
let getData = require("./routes/getData");
let postData = require("./routes/postData");
let putData = require("./routes/updateData");
let deleteData = require("./routes/deleteData");

// routes
app.route("/getData/:accountNumber").get(getData.getDataUsingParamsAPI);
app.route("/getData").get(getData.getDataUsingQueryAPI);
app.route("/getAllData").get(getData.getAllDataAPI);
app.route("/postData").post(postData.postData);
app.route("/putData").put(putData.updateData);
app.route("/deleteData/:accountNumber").delete(deleteData.deleteDataUsingParamsAPI);
app.route("/deleteData").delete(deleteData.deleteDataUsingQueryAPI);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
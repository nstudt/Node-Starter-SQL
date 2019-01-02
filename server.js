const http = require("http");
const app = require("./app");
const User = require("./models/user_model");
const sequelize = require("./util/database");

const port = process.env.PORT || 3000;
const server = http.createServer(app);


sequelize
  .sync({ force: true })
  .then(result => {
    console.log("success result of sequelize sync: ");
      server.listen(port, () => console.log(`Server listening on ${port}`));
  })
  .catch(err => {
    console.log(`initialization of sequelize failed with error ${err}`);
  });
   

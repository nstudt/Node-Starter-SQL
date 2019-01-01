const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);
const sequelize = require("./util/database");

sequelize
  .sync({ force: true })
  .then(result => {
    console.log("result of sequelize sync: ", result);
    server.listen(port, () => console.log(`Server listening on ${port}`));
  })
  .catch(err => {
    console.log(`initialization of sequelize failed with error ${err}`);
  });

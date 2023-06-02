const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const cors = require("cors");
const connectDb = require("./db/mongodb");
const { appConfig, dataBaseConfig, dataBaseMongoConfig } = require("./config");

app.use(cors());

async function initApp(appConfig, dataBaseMongoConfig) {
  try {
    await connectDb(dataBaseMongoConfig);
    const port = process.env.PORT || appConfig.port;
    app.listen(port, () => console.log(`Listen on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

initApp(appConfig, dataBaseMongoConfig);

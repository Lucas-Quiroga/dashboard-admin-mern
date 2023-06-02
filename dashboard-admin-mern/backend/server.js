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
    app.listen(appConfig.port, () =>
      console.log(`listen on ${appConfig.port}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

initApp(appConfig, dataBaseMongoConfig);

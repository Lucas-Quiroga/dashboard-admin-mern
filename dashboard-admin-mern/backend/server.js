const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const connectDb = require("./db/mongodb");
const { appConfig, dataBaseConfig } = require("./config");

async function initApp(appConfig, dataBaseConfig) {
  try {
    await connectDb(dataBaseConfig);
    app.listen(appConfig.port, () =>
      console.log(`listen on ${appConfig.port}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

initApp(appConfig, dataBaseConfig);

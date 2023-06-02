const config = {
  appConfig: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
  },
  dataBaseConfig: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dataBaseName: process.env.DB_NAME,
  },
  dataBaseMongoConfig: {
    protocol: process.env.MONGODB_PROTOCOL,
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    dataBaseName: process.env.MONGODB_NAME,
  },
};

module.exports = config;

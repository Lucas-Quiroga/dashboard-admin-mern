const mongoose = require("mongoose");

mongoose.connection.on("open", () =>
  console.log("conectado exitoso a la base de datos")
);

async function connectDataBase({ host, port, dataBaseName }) {
  const uniformResourceIdentifier = `mongodb://${host}:${port}/${dataBaseName}`;
  await mongoose.connect(uniformResourceIdentifier, {
    useNewUrlParser: true,
  });
}

const mongoose = require("mongoose");

mongoose.connection.on("open", () =>
  console.log("conectado exitoso a la base de datos")
);

async function connectDataBase({ protocol, host, port, dataBaseName }) {
  const uniformResourceIdentifier = `${protocol}//${host}:${port}/${dataBaseName}`;
  await mongoose.connect(uniformResourceIdentifier, {
    useNewUrlParser: true,
  });
}

module.exports = connectDataBase;

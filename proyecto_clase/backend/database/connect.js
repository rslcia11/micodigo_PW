const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("proyecto_clase", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión a la base de datos exitosa.");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
    }
})();

module.exports = sequelize;
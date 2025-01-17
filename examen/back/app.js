const express = require("express");
const cors = require("cors");
const sequelize = require("./database/connect");
const autosRoutes = require("./routes/autos");

const app = express(); 
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.use("/autos", autosRoutes);

(async () => {
    try {
        await sequelize.sync({ force: false });
        console.log("Modelos sincronizados con la base de datos.");
    } catch (error) {
        console.error("Error al sincronizar los modelos:", error);
    }
})();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

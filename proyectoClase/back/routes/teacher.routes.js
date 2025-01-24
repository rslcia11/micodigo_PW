var express = require("express");
var router = express.Router();

const teacherController = require("../controllers/teacher.controller");

// Ruta para obtener la lista de profesores
// Método: GET
router.get("/list", async function (request, response) {
    try {
        const result = await teacherController.getList();
        
        // Verifica si la lista está vacía
        if (!Array.isArray(result) || result.length === 0) {
            return response.status(404).json({
                status: false,
                message: "No se encontraron datos"
            });
        }

        // Desactiva la caché en la respuesta
        response.setHeader("Cache-Control", "no-store");

        return response.status(200).json({
            data: result,
            status: true,
            message: "Lista de maestros obtenida correctamente"
        });
    } catch (error) {
        console.error("Error en /list:", error);
        return response.status(500).json({
            status: false,
            message: "Error interno del servidor"
        });
    }
});

// Ruta para registrar un nuevo profesor
// Método: POST
router.post("/create", async function (request, response) {
    try {
        const { name, last_name, email } = request.body;

        // Verifica que los campos requeridos no estén vacíos
        if (!name || !last_name || !email) {
            return response.status(400).json({
                status: false,
                message: "Todos los campos son obligatorios"
            });
        }

        // Llama al controlador para crear el profesor
        const newTeacher = await teacherController.postCreate(request.body);

        return response.status(201).json({
            status: true,
            message: "Maestro registrado correctamente",
            data: newTeacher
        });
    } catch (error) {
        console.error("Error en /teacher/create:", error);
        return response.status(500).json({
            status: false,
            message: "Error interno del servidor"
        });
    }
});

// Ruta para actualizar los datos de un profesor
// Método: POST
router.post("/update", async function (request, response) {
    try {
        const { pk_teacher, name, last_name, email } = request.body;

        // Verifica que los datos obligatorios estén presentes
        if (!pk_teacher || !name || !last_name || !email) {
            return response.status(400).json({
                status: false,
                message: "Todos los campos son obligatorios"
            });
        }

        // Llama al controlador para actualizar los datos
        const updatedTeacher = await teacherController.postUpdate(request.body);

        return response.status(200).json({
            status: true,
            message: "Profesor actualizado correctamente",
            data: updatedTeacher
        });
    } catch (error) {
        console.error("Error en /teacher/update:", error);
        return response.status(500).json({
            status: false,
            message: "Error interno del servidor"
        });
    }
});

// Ruta para marcar un profesor como eliminado (borrado lógico)
// Método: POST
router.post("/delete", async function (request, response) {
    try {
        const { pk_teacher } = request.body;

        // Verifica si se proporciona el ID del profesor
        if (!pk_teacher) {
            return response.status(400).json({
                status: false,
                message: "Falta el ID del profesor"
            });
        }

        // Llama al controlador para realizar el borrado lógico
        const result = await teacherController.postDelete(pk_teacher);

        return response.status(200).json({
            status: true,
            message: "Profesor eliminado correctamente",
            data: result
        });
    } catch (error) {
        console.error("Error en /teacher/delete:", error);
        return response.status(500).json({
            status: false,
            message: "Error interno del servidor"
        });
    }
});

module.exports = router;

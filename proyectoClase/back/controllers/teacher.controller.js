const modelTeacher = require('../models/teacher.models');

// Función para obtener la lista de profesores activos (is_deleted = 0)
const getList = async () => {
    try {
        const result = await modelTeacher.findAll({
            where: { is_deleted: 0 } // Solo se muestran los profesores no eliminados
        });

        // Devuelve los datos en un formato limpio
        return result.map(teacher => teacher.get({ plain: true }));
    } catch (error) {
        console.error("Error en getList:", error);
        return []; // Retorna un array vacío en caso de error
    }
};

// Función para registrar un nuevo profesor
const postCreate = async (data) => {
    try {
        const newTeacher = await modelTeacher.create({
            name: data.name,
            last_name: data.last_name,
            email: data.email,
            is_deleted: 0 // Se establece como activo al crearlo
        });

        return newTeacher;
    } catch (error) {
        console.error("Error en postCreate:", error);
        return { status: false, message: "Error al registrar maestro" };
    }
};

// Función para actualizar los datos de un profesor
const postUpdate = async (data) => {
    try {
        // Busca el profesor por su clave primaria (pk_teacher)
        const teacher = await modelTeacher.findOne({ where: { pk_teacher: data.pk_teacher } });

        if (!teacher) {
            return { status: false, message: "Profesor no encontrado" };
        }

        // Actualiza los datos del profesor
        await teacher.update({
            name: data.name,
            last_name: data.last_name,
            email: data.email
        });

        return { status: true, message: "Profesor actualizado" };
    } catch (error) {
        console.error("Error en postUpdate:", error);
        return { status: false, message: "Error al actualizar profesor" };
    }
};

// Función para realizar un borrado lógico del profesor
const postDelete = async (pk_teacher) => {
    try {
        // Busca el profesor por su clave primaria
        const teacher = await modelTeacher.findOne({ where: { pk_teacher } });

        if (!teacher) {
            return { status: false, message: "Profesor no encontrado" };
        }

        // En lugar de eliminarlo, cambia el estado de `is_deleted` a 1
        await teacher.update({ is_deleted: 1 });

        return { status: true, message: "Profesor marcado como eliminado" };
    } catch (error) {
        console.error("Error en postDelete:", error);
        return { status: false, message: "Error al eliminar profesor" };
    }
};

// Exporta las funciones para ser utilizadas en las rutas
module.exports = {
    getList,
    postCreate,
    postUpdate,
    postDelete,
};

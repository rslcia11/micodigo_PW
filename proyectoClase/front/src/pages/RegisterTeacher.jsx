// Importar React y los componentes de Material-UI
import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Services } from "../services/service";
import configs from "../configs/env";

const RegisterTeacher = () => {
    // Estados para manejar los datos del formulario
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [teacherList, setTeacherList] = useState([]);
    const [editingTeacher, setEditingTeacher] = useState(null);

    // Cargar la lista de profesores al montar el componente
    useEffect(() => {
        handleTeacherList();
    }, []);

    // Obtener la lista de profesores desde el backend
    const handleTeacherList = async () => {
        const response = await Services({}, configs.routes.teacher.list, "GET");
        if (response.status === false) {
            alert("Error de servicio");
            return;
        }
        setTeacherList(response.data);
    };

    // Crear o actualizar un profesor
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
            name: name,
            last_name: lastName,
            email: email
        };
    
        let response;
        if (editingTeacher) {
            payload.pk_teacher = editingTeacher.pk_teacher;
            response = await Services(payload, configs.routes.teacher.update, "POST");
        } else {
            response = await Services(payload, configs.routes.teacher.create, "POST");
        }
    
        if (!response || response.status === false) {
            alert("Error de servicio");
            return;
        }
    
        alert(editingTeacher ? "Profesor actualizado!" : "Registro correcto!");
        setName("");
        setLastName("");
        setEmail("");
        setEditingTeacher(null);
        await handleTeacherList();
    };

    // Eliminar el profesor solo en el front por lo de auditoria
    const handlerTeacherDelete = async (idTeacher) => {
        const response = await Services(
            { pk_teacher: idTeacher },
            configs.routes.teacher.delete,
            "POST"
        );
    
        if (response.status === false) {
            alert("Error de servicio");
            return;
        }
    
        alert("Maestro eliminado correctamente!");
        await handleTeacherList();
    };
    

    // Llenar el formulario para la edición
    const handleEditTeacher = (teacher) => {
        setName(teacher.name);
        setLastName(teacher.last_name);
        setEmail(teacher.email);
        setEditingTeacher(teacher);
    };

    return (
        <Container>
            <Box mt={6}>
                <Typography variant="h4" gutterBottom>
                    Formulario de RegisterTeacher
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoComplete="off"
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        autoComplete="off"
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        autoComplete="off"
                        label="Correo Electrónico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        {editingTeacher ? "Actualizar" : "Enviar"}
                    </Button>
                </form>
            </Box>

            <Box mt={6}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell align="right">Apellido</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teacherList.map((row) => (
                                <TableRow key={row.pk_teacher}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="right">{row.last_name}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="center">
                                        <IconButton aria-label="edit" color="primary" onClick={() => handleEditTeacher(row)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" color="error" onClick={() => handlerTeacherDelete(row.pk_teacher)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default RegisterTeacher;

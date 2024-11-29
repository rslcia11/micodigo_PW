import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent'; // Asegúrate de importar el ButtonComponent

const InputComponent = ({ onAddItem }) => {
  const [estudiante, setEstudiante] = useState({
    nombre: '',
    edad: '',
    curso: '',
    carrera: '',
  });

  const handleInputChange = (e) => {
    setEstudiante({
      ...estudiante,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(estudiante).every((val) => val.trim() !== '')) {
      onAddItem(estudiante);
      setEstudiante({ nombre: '', edad: '', curso: '', carrera: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={estudiante.nombre}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          name="edad"
          value={estudiante.edad}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="curso">Curso:</label>
        <input
          type="text"
          id="curso"
          name="curso"
          value={estudiante.curso}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="carrera">Carrera:</label>
        <input
          type="text"
          id="carrera"
          name="carrera"
          value={estudiante.carrera}
          onChange={handleInputChange}
        />
      </div>
      <ButtonComponent label="Agregar Estudiante" onClick={handleSubmit} />
    </form>
  );
};

export default InputComponent;

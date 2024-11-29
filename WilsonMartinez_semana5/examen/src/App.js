import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import TableComponent from './components/TableComponent';
import './App.css';

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]); // Lista de estudiantes

  const handleAddEstudiante = (nuevoEstudiante) => {
    setEstudiantes([...estudiantes, nuevoEstudiante]); // Añade el nuevo estudiante al estado
  };

  const handleDeleteEstudiante = (indexToDelete) => {
    setEstudiantes(estudiantes.filter((_, index) => index !== indexToDelete)); // Elimina el estudiante por índice
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Registro de Estudiantes</h1>
      </header>
      <main className="App-main">
        {/* Formulario para añadir estudiantes */}
        <InputComponent onAddItem={handleAddEstudiante} />
        
        {/* Tabla para mostrar estudiantes */}
        <TableComponent items={estudiantes} onDelete={handleDeleteEstudiante} />
      </main>
    </div>
  );
};

export default App;

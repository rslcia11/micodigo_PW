import React from 'react';

const TableComponent = ({ items }) => {
  return (
    <div className="table-container">
      {items.length === 0 ? (
        <p className="no-data">No hay registros de estudiantes</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Curso</th>
              <th>Carrera</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.edad}</td>
                <td>{item.curso}</td>
                <td>{item.carrera}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;

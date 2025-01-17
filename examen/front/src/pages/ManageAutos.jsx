import React, { useState, useEffect } from "react";
import { getAutos, createAuto, updateAuto, deleteAuto } from "../services/autosService";

const ManageAutos = () => {
  const [autos, setAutos] = useState([]);
  const [formData, setFormData] = useState({
    brand: "",
    npassengers: "",
    color: "",
    nengine: "",
    model: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAutos();
  }, []);

  const fetchAutos = async () => {
    const data = await getAutos();
    setAutos(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateAuto(editingId, formData);
      setIsEditing(false);
      setEditingId(null);
    } else {
      await createAuto(formData);
    }
    setFormData({ brand: "", npassengers: "", color: "", nengine: "", model: "" });
    fetchAutos();
  };

  const handleEdit = (auto) => {
    setFormData(auto);
    setIsEditing(true);
    setEditingId(auto.id);
  };

  const handleDelete = async (id) => {
    await deleteAuto(id);
    fetchAutos();
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", padding: "2rem" }}>
      <h1>Ingresa un Vehiculo</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
        <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "45%" }}>
            <label>Marca:</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Ejemplo: Toyota"
              required
              style={{ padding: "0.5rem", width: "100%", marginTop: "0.5rem" }}
            />
          </div>
          <div style={{ width: "45%" }}>
            <label>Pasajeros:</label>
            <input
              type="number"
              name="npassengers"
              value={formData.npassengers}
              onChange={handleChange}
              placeholder="Ejemplo: 5"
              required
              style={{ padding: "0.5rem", width: "100%", marginTop: "0.5rem" }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "45%" }}>
            <label>Color:</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Ejemplo: Rojo"
              required
              style={{ padding: "0.5rem", width: "100%", marginTop: "0.5rem" }}
            />
          </div>
          <div style={{ width: "45%" }}>
            <label>Motor:</label>
            <input
              type="text"
              name="nengine"
              value={formData.nengine}
              onChange={handleChange}
              placeholder="Ejemplo: 2.0"
              required
              style={{ padding: "0.5rem", width: "100%", marginTop: "0.5rem" }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Modelo:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Ejemplo: 2023"
            required
            style={{ padding: "0.5rem", width: "100%", marginTop: "0.5rem" }}
          />
        </div>

        <button type="submit" style={{ padding: "0.7rem", backgroundColor: "#4CAF50", color: "#fff", border: "none", cursor: "pointer" }}>
          {isEditing ? "Actualizar" : "Registrar"}
        </button>
      </form>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "2rem" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Marca</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Pasajeros</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Color</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Motor</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Modelo</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => (
            <tr key={auto.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{auto.brand}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{auto.npassengers}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{auto.color}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{auto.nengine}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{auto.model}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button onClick={() => handleEdit(auto)} style={{ padding: "0.5rem", backgroundColor: "#FF9800", color: "#fff", border: "none", cursor: "pointer", marginRight: "0.5rem" }}>
                  Editar
                </button>
                <button onClick={() => handleDelete(auto.id)} style={{ padding: "0.5rem", backgroundColor: "#f44336", color: "#fff", border: "none", cursor: "pointer" }}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAutos;

import axios from "axios";
const API_URL = "http://localhost:5000/autos";

export const getAutos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createAuto = async (auto) => {
  const response = await axios.post(API_URL, auto);
  return response.data;
};

export const updateAuto = async (id, auto) => {
  const response = await axios.put(`${API_URL}/${id}`, auto);
  return response.data;
};

export const deleteAuto = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "https://guest-visit-scheduler.onrender.com/api/visits";

export const getVisits = async (params = {}) => {
  const res = await axios.get(API_BASE, { params });
  return res.data;
};

export const getVisitById = async (id) => {
  const res = await axios.get(`${API_BASE}/${id}`);
  return res.data;
};

export const createVisit = async (data) => {
  const res = await axios.post(API_BASE, data);
  return res.data;
};

export const updateVisit = async (id, data) => {
  const res = await axios.put(`${API_BASE}/${id}`, data);
  return res.data;
};

export const deleteVisit = async (id) => {
  const res = await axios.delete(`${API_BASE}/${id}`);
  return res.data;
};

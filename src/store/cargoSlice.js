import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  cargos: [
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24"
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26"
    }
  ],
  statusFilter: 'all'
};

const cargoSlice = createSlice({
  name: 'cargo',
  initialState,
  reducers: {
    addCargo: (state, action) => {
      const newCargo = {
        ...action.payload,
        id: `CARGO${uuidv4().slice(0, 6).toUpperCase()}`
      };
      state.cargos.push(newCargo);
    },
    updateCargo: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.cargos.findIndex(cargo => cargo.id === id);
      if (index !== -1) {
        state.cargos[index] = { ...state.cargos[index], ...updates };
      }
    },
    deleteCargo: (state, action) => {
      state.cargos = state.cargos.filter(cargo => cargo.id !== action.payload);
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
    }
  }
});

export const { addCargo, updateCargo, deleteCargo, setStatusFilter } = cargoSlice.actions;
export default cargoSlice.reducer;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCargo } from '../store/cargoSlice';
import { CITIES } from '../constants/cities';
import FormSelect from './forms/FormSelect';

const CargoForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    destination: '',
    departureDate: '',
    status: 'Ожидает отправки'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.origin || !formData.destination || !formData.departureDate) {
      alert('Пожалуйста, заполните все поля формы');
      return;
    }

    if (formData.origin === formData.destination) {
      alert('Пункт отправления и назначения не могут быть одинаковыми');
      return;
    }

    dispatch(addCargo(formData));
    setFormData({
      name: '',
      origin: '',
      destination: '',
      departureDate: '',
      status: 'Ожидает отправки'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Добавить новый груз</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Название груза</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <FormSelect
            label="Пункт отправления"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            options={CITIES}
            required
          />

          <FormSelect
            label="Пункт назначения"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            options={CITIES}
            required
          />

          <div className="mb-3">
            <label htmlFor="departureDate" className="form-label">Дата отправления</label>
            <input
              type="date"
              className="form-control"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Добавить груз</button>
        </form>
      </div>
    </div>
  );
};

export default CargoForm;


// export default CargoTableRow;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCargo } from '../../store/cargoSlice';
import CargoStatusBadge from './CargoStatusBadge';
import { formatDate } from '../../utils/dateHelpers';
import { CITIES } from '../../constants/cities';

const CargoTableRow = ({ cargo, onDelete }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedCargo, setEditedCargo] = useState(cargo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedCargo.origin === editedCargo.destination) {
      alert('Пункт отправления и назначения не могут быть одинаковыми');
      return;
    }

    dispatch(updateCargo({ id: cargo.id, updates: editedCargo }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedCargo(cargo);
    setIsEditing(false);
  };

  const handleChange = (name, value) => {
    setEditedCargo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isEditing) {
    return (
      <tr>
        <td>{cargo.id}</td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            name="name"
            value={editedCargo.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </td>
        <td>
          <CargoStatusBadge
            status={editedCargo.status}
            onChange={handleChange}
            disabled={false}
          />
        </td>
        <td>
          <select
            className="form-select form-select-sm"
            name="origin"
            value={editedCargo.origin}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </td>
        <td>
          <select
            className="form-select form-select-sm"
            name="destination"
            value={editedCargo.destination}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </td>
        <td>
          <input
            type="date"
            className="form-control form-control-sm"
            name="departureDate"
            value={editedCargo.departureDate}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </td>
        <td>
          <div className="btn-group btn-group-sm">
            <button className="btn btn-success" onClick={handleSave}>
              Сохранить
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Отмена
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{cargo.id}</td>
      <td>{cargo.name}</td>
      <td>
        <CargoStatusBadge
          status={cargo.status}
          onChange={() => {}}
          disabled={true}
        />
      </td>
      <td>{cargo.origin}</td>
      <td>{cargo.destination}</td>
      <td>{formatDate(cargo.departureDate)}</td>
      <td>
        <div className="btn-group btn-group-sm">
          <button className="btn btn-primary" onClick={handleEdit}>
            Изменить
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(cargo.id)}>
            Удалить
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CargoTableRow;

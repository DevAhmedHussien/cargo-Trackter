import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCargo } from '../store/cargoSlice';
import CargoTableHeader from './cargo/CargoTableHeader';
import CargoTableRow from './cargo/CargoTableRow';

const CargoTable = () => {
  const dispatch = useDispatch();
  const { cargos, statusFilter } = useSelector(state => state.cargo);

  const filteredCargos = statusFilter === 'all' 
    ? cargos 
    : cargos.filter(cargo => cargo.status === statusFilter);

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот груз?')) {
      dispatch(deleteCargo(id));
    }
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <CargoTableHeader />
        <tbody>
          {filteredCargos.map(cargo => (
            <CargoTableRow
              key={cargo.id}
              cargo={cargo}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CargoTable;
import React from 'react';

const CargoTableHeader = () => {
  return (
    <thead className="table-primary">
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Статус</th>
        <th>Откуда</th>
        <th>Куда</th>
        <th>Дата отправления</th>
        <th>Действия</th>
      </tr>
    </thead>
  );
};

export default CargoTableHeader;
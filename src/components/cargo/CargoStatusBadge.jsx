
import React from 'react';
import { STATUSES } from '../../constants/statuses';
import { getStatusClassName } from '../../utils/statusHelpers';

const CargoStatusBadge = ({ status, onChange, disabled }) => {
  return (
    <select
      className={`form-select form-select-sm status-badge ${getStatusClassName(status)}`}
      value={status}
      onChange={(e) => onChange('status', e.target.value)}
      disabled={disabled}
    >
      {STATUSES.map((statusOption) => (
        <option key={statusOption} value={statusOption}>
          {statusOption}
        </option>
      ))}
    </select>
  );
};

export default CargoStatusBadge;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../store/cargoSlice';
import { STATUSES } from '../constants/statuses';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.cargo.statusFilter);

  return (
    <div className="mb-4">
      <div className="row align-items-center">
        <div className="col-auto">
          <label className="form-label mb-0">Фильтр по статусу:</label>
        </div>
        <div className="col-auto">
          <select
            className="form-select"
            value={currentFilter}
            onChange={(e) => dispatch(setStatusFilter(e.target.value))}
          >
            <option value="all">Все статусы</option>
            {STATUSES.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StatusFilter;
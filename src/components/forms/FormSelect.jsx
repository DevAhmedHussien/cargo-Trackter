import React from 'react';

const FormSelect = ({ label, name, value, onChange, options, required }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Выберите значение</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
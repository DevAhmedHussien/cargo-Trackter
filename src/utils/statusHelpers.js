export const getStatusClassName = (status) => {
  switch (status) {
    case 'Ожидает отправки': return 'status-badge--waiting';
    case 'В пути': return 'status-badge--in-transit';
    case 'Доставлен': return 'status-badge--delivered';
    default: return '';
  }
};

export const validateStatusChange = (cargo, newStatus) => {
  if (newStatus === 'Доставлен' && new Date(cargo.departureDate) > new Date()) {
    return {
      isValid: false,
      message: 'Нельзя установить статус "Доставлен" для груза с будущей датой отправления'
    };
  }
  return { isValid: true };
};
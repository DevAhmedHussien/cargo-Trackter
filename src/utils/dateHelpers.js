export const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('ru-RU', options);
};

export const isValidDeliveryDate = (departureDate) => {
  return new Date(departureDate) <= new Date();
};
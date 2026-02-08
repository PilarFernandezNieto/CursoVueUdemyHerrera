export const formatDate = (date?: string | Date | null) => {
  if (!date) return '';

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return '';

  return parsedDate.toLocaleDateString('es-ES');
};

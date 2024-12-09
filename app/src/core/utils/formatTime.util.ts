export const formatTimestamp = (timestamp: any): string => {
  // Convertir el Timestamp en un objeto Date
  const date = timestamp.toDate();

  // Formatear la fecha (ejemplo: DD/MM/YYYY HH:mm:ss)
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(
      2,
      "0",
    )}/${date.getFullYear()} ${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;

  return formattedDate;
};

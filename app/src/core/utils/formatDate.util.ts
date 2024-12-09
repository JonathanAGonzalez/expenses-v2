import { Timestamp } from "firebase/firestore";

interface FirestoreDateObject {
  calendar: {
    identifier: string;
  };
  era: string;
  year: number;
  month: number;
  day: number;
  timeZone: string;
  offset: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}

export const convertToFirestoreTimestamp = (
  data: FirestoreDateObject,
): Timestamp => {
  const { year, month, day, hour, minute, second, millisecond } = data;

  // Crear un objeto Date a partir de los valores
  const date = new Date(
    year,
    month - 1, // Los meses en JavaScript van de 0 a 11
    day,
    hour,
    minute,
    second,
    millisecond,
  );

  // Convertir a Firestore.Timestamp
  return Timestamp.fromDate(date);
};

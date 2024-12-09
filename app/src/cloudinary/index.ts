// https://res.cloudinary.com/dxhd4y7hw/image/upload/v1733514768/vd1x1ngmtwhzqzznwj08.png

//

/**
 * car
 * vd1x1ngmtwhzqzznwj08
 *
 * bank
 * w3cizspzjhgrpfv4qxy3
 *
 * home
 * mahvkn3wf63hgbq5gkus
 *
 * gift
 * enonjbjnnek3m5lr5pqn
 *
 * services
 * m8qpewalttcmc8bf9imu
 *
 * stream
 * evy2qxvuaexpij8qdkoz
 *
 * credit card
 * pzdqxa4hapvm7ev6koyu
 *
 * default category
 * wr8gszdig1efdf7qykqg
 *
 * supermarket
 * t99hdsvsdpg5pf6anok3
 *
 * school
 * ynnwi2ly91tqcyxuuspc
 */

// Definir las claves válidas
type CategoryKey =
  | "car"
  | "bank"
  | "home"
  | "gift"
  | "services"
  | "stream"
  | "credit card"
  // | "default category"
  | "supermarket"
  | "school";

// Asegurar que ambos objetos usen las mismas claves
const ids: Record<CategoryKey, string> = {
  car: "vd1x1ngmtwhzqzznwj08",
  bank: "w3cizspzjhgrpfv4qxy3",
  home: "mahvkn3wf63hgbq5gkus",
  gift: "enonjbjnnek3m5lr5pqn",
  services: "m8qpewalttcmc8bf9imu",
  stream: "evy2qxvuaexpij8qdkoz",
  "credit card": "pzdqxa4hapvm7ev6koyu",
  // "default category": "wr8gszdig1efdf7qykqg",
  supermarket: "t99hdsvsdpg5pf6anok3",
  school: "ynnwi2ly91tqcyxuuspc",
};

const labels: Record<CategoryKey, string> = {
  car: "Auto",
  bank: "Banco",
  home: "Casa",
  gift: "Regalo",
  services: "Servicios",
  stream: "Streaming",
  "credit card": "Tarjeta de Crédito",
  // "default category": "Categoría por Defecto",
  supermarket: "Supermercado",
  school: "Escuela",
};

// Generar un ID aleatorio
const generateRandomId = (): string =>
  Math.random().toString(36).substring(2, 10);

// Construir la URL de la imagen
const generateImageUrl = (cloudinaryId: string): string =>
  `https://res.cloudinary.com/dxhd4y7hw/image/upload/v1733514768/${cloudinaryId}.png`;

// Crear la lista de categorías
export const categoriesObjectToSend = Object.entries(ids).map(
  ([key, cloudinaryId]) => ({
    key,
    label: labels[key as CategoryKey], // Usar el tipo explícito
    id: generateRandomId(),
    imageSrc: generateImageUrl(cloudinaryId),
  }),
);

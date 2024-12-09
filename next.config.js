// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https", // Asegúrate de incluir el protocolo
        hostname: "res.cloudinary.com", // Hostname de las imágenes
        pathname: "/**", // Opcional: permite todas las rutas bajo este dominio
      },
    ],
  },
};

module.exports = withPWA(nextConfig);

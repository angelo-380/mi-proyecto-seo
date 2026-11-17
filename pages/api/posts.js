// Archivo: pages/api/posts.js
import { postsCMS } from "../../data/cmsData";

export default function handler(req, res) {
  res.status(200).json({
    fuente: "CMS / Base de Datos Simulada",
    total: postsCMS.length,
    datos: postsCMS,
  });
}
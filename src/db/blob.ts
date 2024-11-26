"use server";

import { put } from "@vercel/blob";

export const uploadFile = async (filename: string, dataUrl: string) => {
  const base64Data = dataUrl.split(",")[1]; // Retirer le préfixe "data:image/svg+xml;base64,"
  const binaryData = Buffer.from(base64Data, "base64"); // Convertir en binaire

  // Envoyer les données brutes
  const { url } = await put(filename, binaryData, { access: "public" });
  return url;
};
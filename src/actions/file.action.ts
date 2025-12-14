"use server";

import { del, put } from "@vercel/blob";

export async function uploadFile(file: File) {
  const { url } = await put(`/images/${file.name}`, file, {
    allowOverwrite: true,
    addRandomSuffix: true,
    access: "public",
  });

  return url;
}

export async function deleteFile(url: string) {
  await del(url);
}

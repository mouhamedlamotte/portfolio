import { kdebug } from "@/lib/kdebug";
import { prismaClient } from "@/lib/prisma.client";

export const addDownload = async (data: {
  downloadedItem: string;
  visitId: string;
}) => {
  try {
    const res = await prismaClient.downloads.create({
      data: {
        ...data,
      },
    });
    return res;
  } catch (error) {
    kdebug(error);
    return null;
  }
};

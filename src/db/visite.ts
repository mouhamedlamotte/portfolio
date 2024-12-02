"use server";

import { kdebug } from "@/lib/kdebug";
import { prismaClient } from "@/lib/prisma.client";
import { getDateId } from "@/lib/utils";
import { VisitedPageSchema, VisitSchema } from "@/schemas/visitSchema";
import { z } from "zod";



export const addVisite = async (visitData: z.infer<typeof VisitSchema>) => {
      try {
        const res = await prismaClient.visit.create({
          data: {
            ...visitData,
            dateID: getDateId(),
          },
          select: {
            id: true,
          }
        });
        return res.id;
      } catch (error) {
        console.error("Database Error:", error);
        return ""
      }
};

export const addVisitedPage = async (visitedPageData: z.infer<typeof VisitedPageSchema>) => {
    try {
      const res = await prismaClient.visitedPage.create({
        data: {
          ...visitedPageData,
        },
        select: {
          id: true,
        },
      });
      return res.id;
    } catch (error) {
      console.error("Database Error:", error);
      return "";
    }
}

export const getallAndNestedVisit = async () =>{
    try {
      const res = await prismaClient.visit.findMany({
          select : {
            id : true,
            ipAddress: true,
            deviceType: true,
            os : true,
            browser : true,
            visitDate : true,
            isBot : true,
            source : true,
            VisitedPages : {
              select : {
                url : true
              }
            },
            Downloads : {
              select : {
                downloadedItem : true
              }
            }
          },
          orderBy : {
            visitDate : "desc"
          }
      });
      return res;
    } catch (error) {
      kdebug("Database Error:", error);
      return [];
    }
}
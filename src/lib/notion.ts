

import "server-only";

import { Client } from "@notionhq/client";
import {
  BlockObjectRequest,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { redis } from "./redis";

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number
): Promise<T> {
  const cachedData = await redis.get(key);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const data = await fetcher();
  await redis.set(key, JSON.stringify(data), "EX", ttl); 
  return data;
}

export const fetchPages = async () => {
  const cacheKey = "notion_pages";

  return await fetchWithCache(cacheKey, async () => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "status",
        status: {
          equals: "published",
        },
      },
    });

    return response.results;
  }, 3600 * 24 * 2);
};

export const fetchBySlug = async (slug: string) => {
  const cacheKey = `notion_page_slug_${slug}`;

  return await fetchWithCache(cacheKey, async () => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    return response.results[0] as PageObjectResponse | undefined;
  }, 3600 * 24 * 2);
};

export const fetchPageBlocks = async (pageId: string) => {
  const cacheKey = `notion_page_blocks_${pageId}`;

  return await fetchWithCache(cacheKey, async () => {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });

    return response.results as BlockObjectRequest[];
  }, 3600 * 24 * 2);
};

export const invalidateCache = async (key: string) => {
  await redis.del(key);
};
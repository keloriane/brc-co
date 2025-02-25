import { GutenbergBlock, PageProps } from "@/types";
import client from "./../../client";
import { GET_PAGE_QUERY } from "./getPages";
import { cleanAndTransformBlock } from "@/utils/cleanAndTransformBlocks";
import { Drama } from "lucide-react";

// Cache configuration
const CACHE_TTL = 3600; // Cache duration in seconds (1 hour)

// Simplified and optimized fetchPageData function
export default async function fetchPageData(
  slug: string
): Promise<PageProps | null> {
  try {
    // Check if cached response exists (use your caching solution, e.g., Redis, local file, or in-memory cache)
    const cachedData = await getCachedPageData(slug);
    if (cachedData) return cachedData;

    // Fetch data from WordPress
    const { data } = await client.query<{
      nodeByUri: {
        id: string;
        title: string;
        blocks: GutenbergBlock[];
      } | null;
    }>({
      query: GET_PAGE_QUERY,
      variables: { uri: `/${slug}` },
      fetchPolicy: "no-cache", // Avoid stale data from Apollo's cache
    });

    console.log("DATA =>", data);

    if (!data?.nodeByUri) {
      console.error(`No data found for URI: /${slug}`);
      return null;
    }

    // Transform blocks using your utility function
    const transformedBlocks = cleanAndTransformBlock(data.nodeByUri.blocks);

    const pageProps: PageProps = {
      id: data.nodeByUri.id,
      title: data.nodeByUri.title,
      blocks: transformedBlocks,
    };

    console.log(data);

    // Store response in cache
    await setCachedPageData(slug, pageProps);

    return pageProps;
  } catch (error: unknown) {
    console.error("Error fetching page data:", error || error);
    return null;
  }
}

// Dummy caching methods (replace with your caching logic)
async function getCachedPageData(slug: string): Promise<PageProps | null> {
  console.log(CACHE_TTL);
  // Example: Implement a caching mechanism here
  console.log(slug);
  return null;
}

async function setCachedPageData(slug: string, data: PageProps): Promise<void> {
  console.log(data);
  console.log(slug);
  // Example: Save data to cache with expiration time
}

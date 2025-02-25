import { gql } from "@apollo/client";
import client from "../../client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { cleanAndTransformBlock } from "@/utils/cleanAndTransformBlocks";
import { GutenbergBlock } from "@/types/GuttenBergBlock";
import { PageProps } from "@/types";

// Fetch data from the GraphQL API
const getData = async (): Promise<PageProps | null> => {
  try {
    const { data } = await client.query<{
      nodeByUri: {
        id: string;
        title: string;
        blocks: GutenbergBlock[];
      } | null;
    }>({
      query: gql`
        query GetPages {
          nodeByUri(uri: "/") {
            ... on Page {
              id
              title
              blocks(postTemplate: false)
            }
          }
        }
      `,
      variables: { uri: "/" },
    });

    if (!data?.nodeByUri) {
      console.error("No data returned for the requested URI.");
      return null;
    }

    // Clean and transform blocks using your utility function
    const transformedBlocks = cleanAndTransformBlock(data.nodeByUri.blocks);

    return {
      id: data.nodeByUri.id,
      title: data.nodeByUri.title,
      blocks: transformedBlocks,
    };
  } catch (error) {
    // Ensure type-safety by narrowing the type of `error`
    if (error instanceof Error) {
      console.error("Error fetching data:", error.message);
    } else {
      console.error("Unknown error fetching data:", error);
    }
    return null;
  }
};

export default async function Home() {
  const data = await getData();

  console.log(data);

  if (!data) {
    return <div>Error: Unable to fetch data.</div>;
  }

  return (
    <div>
      <BlockRenderer blocks={data.blocks} />
    </div>
  );
}

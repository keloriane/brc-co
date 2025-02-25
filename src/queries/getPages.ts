import { gql } from "@apollo/client";
import client from "./../../client";

// Define TypeScript interfaces for the GraphQL response
interface PageNode {
  uri: string;
}

interface PagesQueryResponse {
  pages: {
    nodes: PageNode[];
  };
}

// Define the return type for getStaticPaths
interface StaticPath {
  params: {
    slug: string[];
  };
}

interface GetStaticPathsReturn {
  paths: StaticPath[];
  fallback: boolean;
}

export const GET_PAGE_QUERY = gql`
  query GetPages($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        blocks(postTemplate: false)
      }
    }
  }
`;

export const getStaticPaths = async (): Promise<GetStaticPathsReturn> => {
  const { data } = await client.query<PagesQueryResponse>({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes
      .filter((page) => page.uri !== "accueil")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: false,
  };
};

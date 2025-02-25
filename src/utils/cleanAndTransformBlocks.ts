import { GutenbergBlock } from "@/types/GuttenBergBlock";
import { v4 as uuid } from "uuid";

export const cleanAndTransformBlock = (
  blockJson: unknown
): GutenbergBlock[] => {
  if (!blockJson || typeof blockJson !== "object") {
    throw new Error("Invalid block JSON");
  }

  const blocks: GutenbergBlock[] = JSON.parse(JSON.stringify(blockJson));

  // Recursive function to assign unique IDs to all blocks
  const assignIds = (blockList: GutenbergBlock[]) => {
    blockList.forEach((block) => {
      block.id = uuid(); // Assign a unique ID to each block
      if (block.innerBlocks && block.innerBlocks.length > 0) {
        assignIds(block.innerBlocks); // Handle nested blocks
      }
    });
  };

  assignIds(blocks);

  return blocks;
};

// types.ts
export interface GutenbergBlock {
  id?: string; // Optional if not assigned yet
  name: string; // Ensure this is always a string
  attributes: Record<string>; // Adjust based on your schema
  innerBlocks: GutenbergBlock[]; // For nested blocks
  url?: string;
}

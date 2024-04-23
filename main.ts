import { createGraph } from "jsr:@deno/graph@0.73.1";

const graph = await createGraph(
  "https://deno.land/x/std@0.223.0/assert/assert.ts",
);
console.log(graph);

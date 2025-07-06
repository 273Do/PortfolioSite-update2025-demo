import type { MaterialType } from "@/contexts/types";

interface ModelMaterialProps {
  material: MaterialType;
  // biome-ignore lint/suspicious/noExplicitAny: usage required for lamina Depth ref
  depth: React.RefObject<any>;
}

export type { ModelMaterialProps };

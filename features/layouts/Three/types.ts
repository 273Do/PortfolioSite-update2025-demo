interface ModelMaterialProps {
  material: "wireframe" | "metal" | "lamina";
  // biome-ignore lint/suspicious/noExplicitAny: usage required for lamina Depth ref
  depth: React.RefObject<any>;
}

export type { ModelMaterialProps };

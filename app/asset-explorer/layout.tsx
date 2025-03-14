import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EPANET Projection Converter",
  description:
    "Convert EPANET network files between different coordinate systems",
};

export default function ProjectionConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

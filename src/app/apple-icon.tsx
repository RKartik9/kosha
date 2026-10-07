import { ImageResponse } from "next/og";
import { KoshaMark } from "@/components/og/KoshaMark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<KoshaMark px={180} />, size);
}

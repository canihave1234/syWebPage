import { ImageResponse } from "next/og";

export const alt = "Soyun Kim — Software Developer in Toronto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "72px", background: "#e3f2b8", color: "#20251b" }}>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 3 }}>TORONTO, ON · SOFTWARE DEVELOPER</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>Soyun Kim.</div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 20 }}>Banking + public-sector experience.</div>
      </div>
      <div style={{ display: "flex", fontSize: 25 }}>Java · Next.js · OCR · soyunsmkim.vercel.app</div>
    </div>,
    size,
  );
}

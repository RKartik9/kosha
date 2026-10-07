/** Satori-compatible Kosha mark for ImageResponse (icons and OG images). */
export function KoshaMark({ px, radius = 0 }: { px: number; radius?: number }) {
  return (
    <div style={{ width: px, height: px, display: "flex", background: "#1e1b4b", borderRadius: radius }}>
      <svg width={px} height={px} viewBox="0 0 64 64">
        <path
          d="M32 9 Q52.7 11.3 55 32 Q52.7 52.7 32 55 Q11.3 52.7 9 32 Q11.3 11.3 32 9 Z"
          fill="none"
          stroke="#fbf8f1"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <g fill="#f2a93b">
          {[0, 90, 180, 270].map((deg) => (
            <ellipse key={deg} cx="32" cy="22.5" rx="5" ry="8" transform={`rotate(${deg} 32 32)`} />
          ))}
        </g>
        <g fill="#fbf8f1">
          <circle cx="32" cy="32" r="3.4" />
          <circle cx="20.5" cy="20.5" r="2.6" />
          <circle cx="43.5" cy="20.5" r="2.6" />
          <circle cx="20.5" cy="43.5" r="2.6" />
          <circle cx="43.5" cy="43.5" r="2.6" />
        </g>
      </svg>
    </div>
  );
}

export function OgCard({
  eyebrow,
  title,
  subtitle,
  footer,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  footer: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f3eee3",
        padding: "64px 72px",
        color: "#1e1b4b",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <KoshaMark px={64} radius={14} />
        <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>Kosha</div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#b86e0c",
          }}
        >
          {eyebrow}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: title.length > 40 ? 64 : 80, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2.5 }}>
          {title}
        </div>
        <div style={{ fontSize: 30, lineHeight: 1.35, color: "#55527e", maxWidth: 980 }}>{subtitle}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "3px solid #1e1b4b",
          paddingTop: 22,
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        <span>{footer}</span>
        <span style={{ color: "#b86e0c" }}>Free · Hand-picked · No sign-up</span>
      </div>
    </div>
  );
}

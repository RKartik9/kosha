import { cn } from "@/lib/utils";

/**
 * Small kolam-inspired motif: a pulli (dot) grid with looping strokes.
 * `motif` deterministically picks which dots are encircled and how.
 */
export function Kolam({
  motif = 0,
  size = 56,
  className,
}: {
  motif?: number;
  size?: number;
  className?: string;
}) {
  const grid = motif % 3 === 2 ? 4 : 3;
  const gap = 100 / (grid + 1);
  const r = gap * 0.48;
  let bits = ((motif + 1) * 2654435761) >>> 0;

  const dots: { x: number; y: number; loop: boolean; petal: boolean }[] = [];
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      dots.push({
        x: gap * (j + 1),
        y: gap * (i + 1),
        loop: (bits & 1) === 1 || (i === j && grid === 3),
        petal: (bits & 2) === 2,
      });
      bits = (bits >>> 2) | ((bits & 3) << 30);
    }
  }

  const loop = (x: number, y: number) =>
    `M ${x} ${y - r} Q ${x + r} ${y - r} ${x + r} ${y} Q ${x + r} ${y + r} ${x} ${y + r} Q ${x - r} ${y + r} ${x - r} ${y} Q ${x - r} ${y - r} ${x} ${y - r} Z`;
  const petal = (x: number, y: number) =>
    `M ${x - r} ${y} Q ${x} ${y - r * 1.6} ${x + r} ${y} Q ${x} ${y + r * 1.6} ${x - r} ${y} Z`;

  const c = 50;
  const R = 50 - gap * 0.35;
  const outer = `M ${c} ${c - R} Q ${c + R * 0.9} ${c - R * 0.9} ${c + R} ${c} Q ${c + R * 0.9} ${c + R * 0.9} ${c} ${c + R} Q ${c - R * 0.9} ${c + R * 0.9} ${c - R} ${c} Q ${c - R * 0.9} ${c - R * 0.9} ${c} ${c - R} Z`;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("text-ink", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={outer} opacity={0.9} />
      {dots.map((d, i) =>
        d.loop ? (
          <path key={`l${i}`} d={d.petal ? petal(d.x, d.y) : loop(d.x, d.y)} className="text-marigold-deep" stroke="currentColor" />
        ) : null
      )}
      {dots.map((d, i) => (
        <circle key={`d${i}`} cx={d.x} cy={d.y} r={2.4} fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}

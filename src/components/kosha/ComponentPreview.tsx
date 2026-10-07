import type { GalleryItem } from "@/data/types";
import { cn } from "@/lib/utils";

type Kind =
  | "button" | "bento" | "form" | "dock" | "text" | "dashboard" | "glow" | "card3d"
  | "command" | "tabs" | "modal" | "drawer" | "beam" | "globe" | "stack" | "list"
  | "table" | "marquee" | "compare" | "ticker" | "chart" | "sidebar" | "timeline"
  | "toast" | "pricing" | "video";

const rules: [RegExp, Kind][] = [
  [/button/i, "button"],
  [/bento/i, "bento"],
  [/form|wizard/i, "form"],
  [/dock/i, "dock"],
  [/command/i, "command"],
  [/tabs/i, "tabs"],
  [/drawer/i, "drawer"],
  [/video/i, "video"],
  [/dialog|modal/i, "modal"],
  [/beam(?!s)/i, "beam"],
  [/globe/i, "globe"],
  [/card stack/i, "stack"],
  [/3d card/i, "card3d"],
  [/pricing/i, "pricing"],
  [/toast/i, "toast"],
  [/list/i, "list"],
  [/table/i, "table"],
  [/marquee/i, "marquee"],
  [/compare/i, "compare"],
  [/ticker/i, "ticker"],
  [/chart/i, "chart"],
  [/sidebar/i, "sidebar"],
  [/timeline/i, "timeline"],
  [/dashboard/i, "dashboard"],
  [/text/i, "text"],
  [/aurora|beams|particles|meteors|sparkles|spotlight|background/i, "glow"],
];

export function previewKind(item: GalleryItem): Kind {
  return rules.find(([re]) => re.test(item.title))?.[1] ?? "card3d";
}

const INK = "#1e1b4b";
const GOLD = "#f2a93b";
const TEAL = "#0f9e8e";
const LINE = "#e3dccb";

const Bar = ({ w, c = LINE, h = 6, className }: { w: string; c?: string; h?: number; className?: string }) => (
  <div className={cn("rounded-full", className)} style={{ width: w, height: h, background: c }} />
);

function Body({ kind, title }: { kind: Kind; title: string }) {
  switch (kind) {
    case "button":
      return (
        <div className="flex h-full items-center justify-center gap-3">
          <div className="relative overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg" style={{ background: INK }}>
            {/ripple/i.test(title) ? "Click me" : "Get started"}
            {/ripple/i.test(title) ? (
              <span className="absolute left-1/3 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 ring-8 ring-white/10" />
            ) : (
              <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/30 motion-safe:animate-[shine_2.6s_ease-in-out_infinite]" />
            )}
          </div>
          <div className="rounded-lg border-2 px-5 py-2.5 text-sm font-semibold" style={{ borderColor: INK, color: INK }}>Learn more</div>
        </div>
      );
    case "bento":
      return (
        <div className="grid h-full grid-cols-3 grid-rows-2 gap-2 p-4">
          <div className="col-span-2 rounded-lg p-3" style={{ background: INK }}><Bar w="50%" c={GOLD} /><Bar w="30%" c="#ffffff55" className="mt-2" /></div>
          <div className="rounded-lg" style={{ background: GOLD }} />
          <div className="rounded-lg border bg-white" style={{ borderColor: LINE }} />
          <div className="col-span-2 rounded-lg p-3" style={{ background: TEAL }}><Bar w="40%" c="#ffffffaa" /></div>
        </div>
      );
    case "form":
      return (
        <div className="flex h-full flex-col justify-center gap-3 px-8">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-1 items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold" style={{ background: n === 1 ? INK : LINE, color: n === 1 ? "#fff" : INK }}>{n}</span>
                {n < 3 && <div className="h-0.5 flex-1" style={{ background: n === 1 ? INK : LINE }} />}
              </div>
            ))}
          </div>
          <div className="h-8 rounded-md border bg-white" style={{ borderColor: LINE }} />
          <div className="h-8 rounded-md border bg-white" style={{ borderColor: LINE }} />
          <div className="ml-auto rounded-md px-4 py-1.5 text-xs font-semibold text-white" style={{ background: INK }}>Next →</div>
        </div>
      );
    case "dock":
      return (
        <div className="flex h-full items-end justify-center pb-6">
          <div className="flex items-end gap-2 rounded-2xl border bg-white/80 px-3 py-2 shadow-lg" style={{ borderColor: LINE }}>
            {[28, 34, 46, 34, 28].map((s, i) => (
              <div key={i} className="rounded-xl" style={{ width: s, height: s, background: [INK, TEAL, GOLD, TEAL, INK][i] }} />
            ))}
          </div>
        </div>
      );
    case "text":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
          <p className="bg-clip-text text-3xl font-bold tracking-tight text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${INK}, ${TEAL}, ${GOLD})` }}>
            Build faster.
          </p>
          <p className="text-sm" style={{ color: INK }}>
            Ship <span className="opacity-100">beautiful</span> <span className="opacity-50">interfaces</span> <span className="opacity-20">today</span>
          </p>
        </div>
      );
    case "dashboard":
    case "sidebar":
      return (
        <div className="flex h-full">
          <div className="flex w-1/4 flex-col gap-2 p-3" style={{ background: INK }}>
            <Bar w="70%" c={GOLD} />
            {[60, 80, 50, 70].map((w, i) => <Bar key={i} w={`${w}%`} c="#ffffff40" />)}
          </div>
          <div className="flex-1 p-3">
            {kind === "dashboard" ? (
              <>
                <div className="grid grid-cols-3 gap-2">
                  {[TEAL, GOLD, INK].map((c) => (
                    <div key={c} className="rounded-md border bg-white p-2" style={{ borderColor: LINE }}><Bar w="40%" /><Bar w="60%" c={c} h={8} className="mt-1.5" /></div>
                  ))}
                </div>
                <div className="mt-2 flex h-[45%] items-end gap-1.5 rounded-md border bg-white p-2" style={{ borderColor: LINE }}>
                  {[40, 65, 50, 80, 60, 90, 70].map((h, i) => <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? GOLD : INK }} />)}
                </div>
              </>
            ) : (
              <div className="space-y-2"><Bar w="50%" c={INK} h={8} /><Bar w="90%" /><Bar w="80%" /><Bar w="85%" /><Bar w="60%" /></div>
            )}
          </div>
        </div>
      );
    case "glow": {
      const t = title.toLowerCase();
      return (
        <div className="relative flex h-full items-center justify-center overflow-hidden" style={{ background: INK }}>
          {t.includes("aurora") && (
            <>
              <div className="absolute -left-10 -top-6 h-40 w-2/3 rounded-full opacity-70 blur-3xl" style={{ background: TEAL }} />
              <div className="absolute -right-6 top-4 h-32 w-1/2 rounded-full opacity-60 blur-3xl" style={{ background: "#7c6cf0" }} />
              <div className="absolute bottom-0 left-1/4 h-24 w-1/2 rounded-full opacity-40 blur-3xl" style={{ background: GOLD }} />
            </>
          )}
          {t.includes("meteor") &&
            Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="absolute h-px w-20 rotate-[215deg] bg-gradient-to-r from-white to-transparent" style={{ left: `${10 + i * 13}%`, top: `${(i * 29) % 70}%` }} />
            ))}
          {t.includes("sparkle") &&
            Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="absolute text-[10px]" style={{ left: `${(i * 37) % 92}%`, top: `${(i * 53) % 88}%`, color: i % 3 ? "#fff" : GOLD }}>✦</span>
            ))}
          {t.includes("beams") &&
            Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="absolute top-0 h-full w-px origin-top" style={{ left: `${15 + i * 14}%`, transform: `rotate(${(i - 2.5) * 8}deg)`, background: `linear-gradient(to bottom, ${i % 2 ? TEAL : GOLD}, transparent)` }} />
            ))}
          {t.includes("spotlight") && (
            <div className="absolute -top-10 left-1/4 h-[140%] w-1/2 rotate-[-20deg] opacity-40 blur-2xl" style={{ background: "linear-gradient(to bottom, #ffffff, transparent)" }} />
          )}
          {t.includes("particle") && (
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 180" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => {
                const x = (i * 71) % 290 + 5, y = (i * 47) % 170 + 5;
                const nx = ((i + 1) * 71) % 290 + 5, ny = ((i + 1) * 47) % 170 + 5;
                return (
                  <g key={i}>
                    {i % 2 === 0 && <line x1={x} y1={y} x2={nx} y2={ny} stroke={TEAL} strokeOpacity="0.5" />}
                    <circle cx={x} cy={y} r="2.2" fill="#fff" />
                  </g>
                );
              })}
            </svg>
          )}
          <p className="relative text-2xl font-bold tracking-tight text-white">Hero headline</p>
        </div>
      );
    }
    case "video":
      return (
        <div className="relative h-full p-4">
          <div className="space-y-2 opacity-40"><Bar w="40%" c={INK} h={8} /><Bar w="85%" /><Bar w="70%" /></div>
          <div className="absolute inset-0 flex items-center justify-center bg-[#1e1b4b]/30">
            <div className="flex aspect-video w-3/5 items-center justify-center rounded-xl shadow-2xl" style={{ background: `linear-gradient(135deg, ${INK}, ${TEAL})` }}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 pl-0.5 text-sm" style={{ color: INK }}>▶</span>
            </div>
          </div>
        </div>
      );
    case "card3d":
      return (
        <div className="flex h-full items-center justify-center [perspective:600px]">
          <div className="w-1/2 rounded-xl border bg-white p-3 shadow-2xl [transform:rotateX(14deg)_rotateY(-18deg)]" style={{ borderColor: LINE }}>
            <div className="h-16 rounded-lg" style={{ background: `linear-gradient(135deg, ${INK}, ${TEAL})` }} />
            <Bar w="70%" c={INK} className="mt-3" /><Bar w="50%" className="mt-1.5" />
          </div>
        </div>
      );
    case "stack":
      return (
        <div className="relative flex h-full items-center justify-center">
          {[2, 1, 0].map((i) => (
            <div key={i} className="absolute w-1/2 rounded-xl border bg-white p-3 shadow-md" style={{ borderColor: LINE, transform: `translateY(${i * -10}px) scale(${1 - i * 0.06})`, opacity: 1 - i * 0.25 }}>
              <Bar w="60%" c={i === 0 ? INK : LINE} /><Bar w="85%" className="mt-2" /><Bar w="40%" className="mt-1.5" />
            </div>
          ))}
        </div>
      );
    case "pricing":
      return (
        <div className="grid h-full grid-cols-3 items-center gap-2 px-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className={cn("rounded-lg border p-2", i === 1 ? "py-4 shadow-lg" : "bg-white")} style={{ borderColor: i === 1 ? INK : LINE, background: i === 1 ? INK : undefined }}>
              <Bar w="50%" c={i === 1 ? GOLD : LINE} />
              <p className="mt-2 text-lg font-bold" style={{ color: i === 1 ? "#fff" : INK }}>${[0, 12, 29][i]}</p>
              <Bar w="80%" c={i === 1 ? "#ffffff40" : LINE} className="mt-2" />
              <Bar w="65%" c={i === 1 ? "#ffffff40" : LINE} className="mt-1.5" />
            </div>
          ))}
        </div>
      );
    case "command":
      return (
        <div className="flex h-full items-center justify-center px-8">
          <div className="w-full rounded-xl border bg-white shadow-xl" style={{ borderColor: LINE }}>
            <div className="flex items-center gap-2 border-b px-3 py-2 text-xs" style={{ borderColor: LINE, color: INK }}>
              <span className="opacity-50">⌕</span> Type a command…
              <span className="ml-auto rounded border px-1 text-[10px]" style={{ borderColor: LINE }}>⌘K</span>
            </div>
            {["Open project", "Search docs", "Toggle theme"].map((t, i) => (
              <div key={t} className="px-3 py-1.5 text-xs" style={{ background: i === 0 ? "#f2a93b33" : undefined, color: INK }}>{t}</div>
            ))}
          </div>
        </div>
      );
    case "tabs":
      return (
        <div className="flex h-full flex-col justify-center gap-3 px-8">
          <div className="flex gap-1 rounded-full p-1" style={{ background: LINE }}>
            {["Overview", "Usage", "Code"].map((t, i) => (
              <div key={t} className="flex-1 rounded-full py-1.5 text-center text-xs font-semibold" style={{ background: i === 0 ? INK : undefined, color: i === 0 ? "#fff" : INK }}>{t}</div>
            ))}
          </div>
          <div className="space-y-2 rounded-lg border bg-white p-3" style={{ borderColor: LINE }}><Bar w="70%" c={INK} /><Bar w="90%" /><Bar w="60%" /></div>
        </div>
      );
    case "modal":
      return (
        <div className="relative h-full p-4">
          <div className="space-y-2 opacity-40"><Bar w="40%" c={INK} h={8} /><Bar w="90%" /><Bar w="85%" /><Bar w="70%" /></div>
          <div className="absolute inset-0 flex items-center justify-center bg-[#1e1b4b]/30">
            <div className="w-3/5 rounded-xl bg-white p-4 shadow-2xl">
              <Bar w="55%" c={INK} h={8} /><Bar w="90%" className="mt-3" /><Bar w="70%" className="mt-1.5" />
              <div className="mt-4 flex justify-end gap-2"><div className="h-6 w-14 rounded-md" style={{ background: LINE }} /><div className="h-6 w-14 rounded-md" style={{ background: INK }} /></div>
            </div>
          </div>
        </div>
      );
    case "drawer":
      return (
        <div className="relative h-full p-4">
          <div className="space-y-2 opacity-40"><Bar w="40%" c={INK} h={8} /><Bar w="90%" /><Bar w="70%" /></div>
          <div className="absolute inset-0 bg-[#1e1b4b]/30" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-t-2xl bg-white p-4 shadow-2xl">
            <div className="mx-auto h-1 w-10 rounded-full" style={{ background: LINE }} />
            <Bar w="50%" c={INK} h={8} className="mt-3" /><Bar w="80%" className="mt-2" />
          </div>
        </div>
      );
    case "beam":
      return (
        <div className="relative flex h-full items-center justify-between px-10">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 180" preserveAspectRatio="none" aria-hidden="true">
            {[40, 90, 140].map((y) => <path key={y} d={`M60 ${y} C 150 ${y}, 150 90, 240 90`} stroke={GOLD} strokeWidth="2" fill="none" strokeDasharray="6 6" />)}
          </svg>
          <div className="relative flex flex-col gap-4">{[INK, TEAL, INK].map((c, i) => <div key={i} className="h-8 w-8 rounded-full border-2 bg-white" style={{ borderColor: c }} />)}</div>
          <div className="relative h-12 w-12 rounded-full" style={{ background: INK }} />
        </div>
      );
    case "globe":
      return (
        <div className="flex h-full items-center justify-center" style={{ background: INK }}>
          <svg viewBox="0 0 100 100" className="h-3/4" aria-hidden="true">
            <circle cx="50" cy="50" r="40" fill="none" stroke={TEAL} strokeWidth="1.5" />
            {[14, 28].map((rx) => <ellipse key={rx} cx="50" cy="50" rx={rx} ry="40" fill="none" stroke={TEAL} strokeWidth="1" opacity="0.6" />)}
            {[-20, 0, 20].map((d) => <ellipse key={d} cx="50" cy={50 + d} rx={Math.sqrt(1600 - d * d)} ry="6" fill="none" stroke={TEAL} strokeWidth="1" opacity="0.6" />)}
            {[[35, 38], [62, 30], [58, 62]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="2.5" fill={GOLD} />)}
          </svg>
        </div>
      );
    case "list":
    case "toast":
      return (
        <div className={cn("flex h-full flex-col gap-2 p-5", kind === "toast" ? "items-end justify-end" : "justify-center")}>
          {[TEAL, GOLD, INK].map((c, i) => (
            <div key={c} className="flex w-3/4 items-center gap-2 rounded-lg border bg-white p-2 shadow-sm" style={{ borderColor: LINE, opacity: 1 - i * 0.2 }}>
              <span className="h-6 w-6 shrink-0 rounded-full" style={{ background: c }} />
              <div className="flex-1 space-y-1"><Bar w="60%" c={INK} h={5} /><Bar w="85%" h={5} /></div>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="flex h-full flex-col justify-center px-5">
          <div className="overflow-hidden rounded-lg border bg-white text-[10px]" style={{ borderColor: LINE, color: INK }}>
            <div className="grid grid-cols-4 gap-2 px-3 py-1.5 font-semibold" style={{ background: LINE }}><span>Name</span><span>Status</span><span>Role</span><span className="text-right">Amount</span></div>
            {["Asha", "Ravi", "Meera", "Dev"].map((n, i) => (
              <div key={n} className="grid grid-cols-4 items-center gap-2 border-t px-3 py-1.5" style={{ borderColor: LINE }}>
                <span>{n}</span>
                <span><span className="rounded-full px-1.5 py-0.5 text-white" style={{ background: i % 2 ? GOLD : TEAL }}>{i % 2 ? "Pending" : "Paid"}</span></span>
                <span className="opacity-60">Admin</span><span className="text-right">₹{(i + 2) * 1200}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "marquee":
      return (
        <div className="flex h-full flex-col justify-center gap-3 overflow-hidden">
          {[0, 1].map((row) => (
            <div key={row} className="flex gap-3" style={{ transform: `translateX(${row ? -30 : 0}px)` }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="h-10 w-20 shrink-0 rounded-lg border bg-white" style={{ borderColor: LINE }}>
                  <Bar w="50%" c={[INK, TEAL, GOLD][(i + row) % 3]} className="mx-auto mt-4" />
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    case "compare":
      return (
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-0 w-1/2" style={{ background: `linear-gradient(135deg, ${INK}, #4b4790)` }} />
          <div className="absolute inset-y-0 right-0 w-1/2" style={{ background: `linear-gradient(135deg, ${GOLD}, #f7d08a)` }} />
          <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white" />
          <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs shadow" style={{ color: INK }}>⇆</div>
        </div>
      );
    case "ticker":
      return (
        <div className="flex h-full flex-col items-center justify-center">
          <p className="text-5xl font-bold tabular-nums tracking-tight" style={{ color: INK }}>12,480</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider" style={{ color: TEAL }}>▲ downloads this week</p>
        </div>
      );
    case "chart":
      return (
        <div className="flex h-full items-end gap-2 px-6 pb-6 pt-8">
          {[35, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i % 3 === 2 ? GOLD : i % 3 === 1 ? TEAL : INK }} />
          ))}
        </div>
      );
    case "timeline":
      return (
        <div className="flex h-full flex-col justify-center gap-3 px-8">
          {[INK, TEAL, GOLD].map((c, i) => (
            <div key={c} className="flex items-center gap-3">
              <span className="h-3 w-3 shrink-0 rounded-full ring-4 ring-white" style={{ background: c }} />
              <div className="flex-1 space-y-1"><Bar w={`${40 + i * 10}%`} c={INK} h={5} /><Bar w="80%" h={5} /></div>
            </div>
          ))}
        </div>
      );
  }
}

export function ComponentPreview({ item, className }: { item: GalleryItem; className?: string }) {
  const kind = previewKind(item);
  return (
    <div
      className={cn("relative aspect-[16/10] overflow-hidden bg-[#f7f3ea]", className)}
      style={{ backgroundImage: "radial-gradient(#1e1b4b14 1px, transparent 1px)", backgroundSize: "14px 14px" }}
      aria-hidden="true"
    >
      <Body kind={kind} title={item.title} />
    </div>
  );
}

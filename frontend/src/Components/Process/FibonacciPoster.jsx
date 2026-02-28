import { useMemo } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

/**
 * theme:
 *  - "light" => poster blanco editorial
 *  - "dark"  => versión Webcode-Art sobre fondo oscuro
 */
export default function FibonacciPoster({
  theme = "light",
  count = 9, // 9 => llega a 34 (1,1,2,3,5,8,13,21,34)
  unit = 0.12, // tamaño base (ajusta escala real)
  scale = 1,
  position = [0, 0, 0],
}) {
  const cfg = useMemo(() => {
    const isDark = theme === "dark";
    return {
      isDark,
      bg: isDark ? "#070707" : "#ffffff",
      square: isDark ? "rgba(230,213,188,0.22)" : "rgba(120,120,120,0.35)",
      squareStrong: isDark ? "rgba(230,213,188,0.35)" : "rgba(90,90,90,0.45)",
      dashed: isDark ? "rgba(230,213,188,0.26)" : "rgba(70,70,70,0.30)",
      dashedSoft: isDark ? "rgba(230,213,188,0.18)" : "rgba(70,70,70,0.18)",
      spiral: isDark ? "#e8c98f" : "#d84d4d", //  póster el arco principal va multicolor; aquí  con vertexColors abajo
      point: isDark ? "#e8c98f" : "#111111",
    };
  }, [theme]);

  const data = useMemo(() => {
    // ---------- Fibonacci sequence ----------
    const fib = [1, 1];
    for (let i = 2; i < count; i++) fib.push(fib[i - 1] + fib[i - 2]);

    // ---------- Place squares (classic Fibonacci tiling) ----------
    // We keep a growing bounding box and place the next square on a side.
    // dir: 0 right, 1 up, 2 left, 3 down
    let dir = 0;

    // bounding box of the whole tiling
    let minX = 0;
    let minY = 0;
    let maxX = fib[0] * unit;
    let maxY = fib[0] * unit;

    const squares = [];

    for (let i = 0; i < fib.length; i++) {
      const size = fib[i] * unit;

      let x = 0;
      let y = 0;

      if (i === 0) {
        x = 0;
        y = 0;
      } else {
        if (dir === 0) {
          x = maxX;
          y = minY;
          maxX += size;
        } else if (dir === 1) {
          x = minX;
          y = maxY;
          maxY += size;
        } else if (dir === 2) {
          x = minX - size;
          y = minY;
          minX -= size;
        } else {
          x = minX;
          y = minY - size;
          minY -= size;
        }
      }

      squares.push({
        i,
        n: fib[i],
        size,
        x,
        y,
        dir, // orientation for the arc inside this square
        cx: x + size / 2,
        cy: y + size / 2,
      });

      dir = (dir + 1) % 4;
    }

    const bbox = { minX, minY, maxX, maxY, w: maxX - minX, h: maxY - minY };

    // ---------- Helper: build line geometry ----------
    const lineFrom = (pts) => new THREE.BufferGeometry().setFromPoints(pts);

    // ---------- Squares geometries ----------
    const squareGeos = squares.map((s) => {
      const { x, y, size } = s;
      const pts = [
        new THREE.Vector3(x, y, 0),
        new THREE.Vector3(x + size, y, 0),
        new THREE.Vector3(x + size, y + size, 0),
        new THREE.Vector3(x, y + size, 0),
        new THREE.Vector3(x, y, 0),
      ];
      return lineFrom(pts);
    });

    // ---------- Diagonals (dashed) inside each square ----------
    const diagGeos = squares.map((s) => {
      const { x, y, size } = s;
      const pts = [
        new THREE.Vector3(x, y, 0),
        new THREE.Vector3(x + size, y + size, 0),
      ];
      return lineFrom(pts);
    });

    // ---------- Main spiral as quarter-arcs, with vertex colors (multicolor like poster) ----------
    const spiralPts = [];
    const spiralCols = [];

    // color palette similar-ish to poster rainbow arc
    const palette = [
      new THREE.Color("#d84d4d"), // red
      new THREE.Color("#e7a63c"), // orange
      new THREE.Color("#e9c86a"), // gold
      new THREE.Color("#2fa88f"), // teal
      new THREE.Color("#2f6f6f"), // deep teal
      new THREE.Color("#9b59b6"), // purple
    ];

    // For each square, define the corner center for the arc
    // Mapping chosen to produce the "hook" at the center and grow outward.
    const arcCorner = (s) => {
      const { x, y, size, dir } = s;
      // These corners make the spiral look like the standard Fibonacci poster
      // dir 0 (right): center at (x, y)      arc 0→90
      // dir 1 (up):    center at (x+size,y)  arc 90→180
      // dir 2 (left):  center at (x+size,y+size) arc 180→270
      // dir 3 (down):  center at (x, y+size) arc 270→360
      if (dir === 0) return { cx: x, cy: y, a0: 0, a1: Math.PI / 2 };
      if (dir === 1)
        return { cx: x + size, cy: y, a0: Math.PI / 2, a1: Math.PI };
      if (dir === 2)
        return {
          cx: x + size,
          cy: y + size,
          a0: Math.PI,
          a1: (3 * Math.PI) / 2,
        };
      return { cx: x, cy: y + size, a0: (3 * Math.PI) / 2, a1: 2 * Math.PI };
    };

    const segmentsPerArc = 90;

    squares.forEach((s, idx) => {
      const { size } = s;
      const { cx, cy, a0, a1 } = arcCorner(s);
      const col = palette[idx % palette.length];

      for (let k = 0; k <= segmentsPerArc; k++) {
        const t = k / segmentsPerArc;
        const a = a0 + (a1 - a0) * t;
        const px = cx + size * Math.cos(a);
        const py = cy + size * Math.sin(a);

        spiralPts.push(new THREE.Vector3(px, py, 0));

        // slight gradient along the whole spiral
        const c = col.clone().lerp(new THREE.Color("#111111"), 0.1);
        spiralCols.push(c.r, c.g, c.b);
      }
    });

    const spiralGeo = new THREE.BufferGeometry().setFromPoints(spiralPts);
    spiralGeo.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(spiralCols, 3)
    );

    // ---------- Auxiliary dashed arcs (poster-like construction curves) ----------
    // We'll draw a few large dashed arcs that match the feel of the poster:
    //  - one big arc across the left (radius ~ 34)
    //  - one mid arc (radius ~ 21)
    //  - one smaller (radius ~ 13)
    //
    // Use centers derived from bbox corners so they sit nicely in the composition.
    const dashedArc = (cx, cy, r, a0, a1, seg = 180) => {
      const pts = [];
      for (let i = 0; i <= seg; i++) {
        const t = i / seg;
        const a = a0 + (a1 - a0) * t;
        pts.push(
          new THREE.Vector3(cx + r * Math.cos(a), cy + r * Math.sin(a), 0)
        );
      }
      return lineFrom(pts);
    };

    const R34 = 34 * unit;
    const R21 = 21 * unit;
    const R13 = 13 * unit;

    // center for big arcs near bottom-left of bbox
    const cBig = { x: bbox.minX, y: bbox.minY };
    const aux1 = dashedArc(cBig.x, cBig.y, R34, 0, Math.PI * 0.95);
    const aux2 = dashedArc(
      bbox.maxX,
      bbox.minY,
      R21,
      Math.PI * 0.55,
      Math.PI * 1.05
    );
    const aux3 = dashedArc(
      bbox.maxX,
      bbox.maxY,
      R13,
      Math.PI * 1.05,
      Math.PI * 1.55
    );

    // ---------- Big construction diagonals across whole bbox (dashed) ----------
    const bboxDiag1 = lineFrom([
      new THREE.Vector3(bbox.minX, bbox.minY, 0),
      new THREE.Vector3(bbox.maxX, bbox.maxY, 0),
    ]);
    const bboxDiag2 = lineFrom([
      new THREE.Vector3(bbox.minX, bbox.maxY, 0),
      new THREE.Vector3(bbox.maxX, bbox.minY, 0),
    ]);

    // ---------- Points (nodes) ----------
    // Put points at a few key corners (like the poster dots)
    const points = [
      new THREE.Vector3(bbox.minX, bbox.minY, 0),
      new THREE.Vector3(bbox.maxX, bbox.minY, 0),
      new THREE.Vector3(bbox.maxX, bbox.maxY, 0),
    ];

    // ---------- Centering ----------
    const center = new THREE.Vector3(
      (bbox.minX + bbox.maxX) / 2,
      (bbox.minY + bbox.maxY) / 2,
      0
    );

    return {
      fib,
      squares,
      bbox,
      center,
      squareGeos,
      diagGeos,
      spiralGeo,
      auxArcs: [aux1, aux2, aux3],
      bboxDiags: [bboxDiag1, bboxDiag2],
      points,
    };
  }, [count, unit]);

  // Helpers for text styling
  const numberStyle = (n) => {
    if (n === 34) return { color: "#d84d4d", size: 0.42 };
    if (n === 21) return { color: "#111111", size: 0.28 };
    if (n === 13) return { color: "#2f9c91", size: 0.26 };
    if (n === 8) return { color: "#d9b46f", size: 0.24 };
    if (n === 5) return { color: "#111111", size: 0.2 };
    return { color: "rgba(0,0,0,0.0)", size: 0.0 };
  };

  // Materials (R3F props)
  const dashedMatProps = {
    color: new THREE.Color("#cbb892"), 
    dashSize: 0.25 * unit,
    gapSize: 0.15 * unit,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  };

  const dashedSoftMatProps = {
    color: new THREE.Color(cfg.isDark ? "#cbb892" : "#666666"),
    dashSize: 0.18 * unit,
    gapSize: 0.14 * unit,
    transparent: false,
    opacity: 1,
  };

  return (
    <group scale={scale} position={position}>
      {/* Everything centered around 0,0 */}
      <group position={[-data.center.x, -data.center.y, 0]}>
        {/* Squares */}
        {data.squareGeos.map((geo, i) => (
          <line key={`sq-${i}`} geometry={geo}>
            <lineBasicMaterial
              color={cfg.isDark ? cfg.square : cfg.squareStrong}
              transparent
              opacity={cfg.isDark ? 0.45 : 0.5}
            />
          </line>
        ))}

        {/* Square diagonals (dashed) */}
        {data.diagGeos.map((geo, i) => (
          <line
            key={`diag-${i}`}
            geometry={geo}
            onUpdate={(l) => l.computeLineDistances()}
          >
            <lineDashedMaterial {...dashedSoftMatProps} />
          </line>
        ))}

        {/* Big bbox diagonals (dashed) */}
        {data.bboxDiags.map((geo, i) => (
          <line
            key={`bboxd-${i}`}
            geometry={geo}
            onUpdate={(l) => l.computeLineDistances()}
          >
            <lineDashedMaterial {...dashedMatProps} />
          </line>
        ))}

        {/* Auxiliary dashed arcs */}
        {data.auxArcs.map((geo, i) => (
          <line
            key={`aux-${i}`}
            geometry={geo}
            onUpdate={(l) => l.computeLineDistances()}
          >
            <lineDashedMaterial {...dashedMatProps} />
          </line>
        ))}

        {/* Main spiral (multicolor) */}
        <line geometry={data.spiralGeo}>
          <lineBasicMaterial vertexColors transparent={false} opacity={3.0} />
        </line>

        {/* Points */}
        {data.points.map((p, i) => (
          <mesh key={`pt-${i}`} position={[p.x, p.y, 0.001]}>
            <circleGeometry args={[0.06 * unit, 22]} />
            <meshBasicMaterial color={cfg.isDark ? "#e8c98f" : "#111111"} />
          </mesh>
        ))}

        {/* Numbers: show 5,8,13,21,34 exactly like poster */}
        {data.squares.map((s) => {
          const st = numberStyle(s.n);
          if (st.size <= 0) return null;

          // numbers in center of their square, with slight artistic offsets like poster
          let ox = 0;
          let oy = 0;

          if (s.n === 34) {
            ox = -0.12 * s.size;
            oy = 0.1 * s.size;
          }
          if (s.n === 21) {
            ox = 0.12 * s.size;
            oy = 0.12 * s.size;
          }
          if (s.n === 13) {
            ox = 0.12 * s.size;
            oy = -0.05 * s.size;
          }
          if (s.n === 8) {
            ox = -0.05 * s.size;
            oy = -0.08 * s.size;
          }
          if (s.n === 5) {
            ox = -0.05 * s.size;
            oy = 0.08 * s.size;
          }

          return (
            <Text
              key={`n-${s.n}-${s.i}`}
              position={[s.cx + ox, s.cy + oy, 0.01]}
              fontSize={st.size * unit * 5.0}
              color={
                cfg.isDark ? (s.n === 34 ? "#e8c98f" : "#e6d5bc") : st.color
              }
              anchorX="center"
              anchorY="middle"
            >
              {s.n}
            </Text>
          );
        })}
      </group>
    </group>
  );
}

import { useLayoutEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function useWhatIDoFloatingCard({
  isDesktop,
  scrollContainerRef,
  sectionRef,
  startRef,
  floatingRef,
  targetRef,
}) {
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 0, y: 0 });
  const [endScale, setEndScale] = useState(1);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useLayoutEffect(() => {
    if (!isDesktop) return;
    if (!startRef.current || !floatingRef.current || !targetRef.current) return;

    const s = startRef.current.getBoundingClientRect();
    const f = floatingRef.current.getBoundingClientRect();
    const t = targetRef.current.getBoundingClientRect();

    const offsetY = window.innerWidth > 1600 ? 60 : 40;
    const extraOffset = 120;

    setStart({
      x: s.left - f.left,
      y: s.top - f.top - offsetY + extraOffset,
    });

    setEnd({
      x: t.left - f.left - 50,
      y: t.top - f.top - 90 - offsetY * 0.3,
    });

    setEndScale((t.width / f.width) * 0.9);
  }, [isDesktop, startRef, floatingRef, targetRef]);

  const x = isDesktop
    ? useTransform(scrollYProgress, [0, 0.45], [start.x, end.x])
    : 0;

  const y = isDesktop
    ? useTransform(scrollYProgress, [0, 0.45], [start.y, end.y])
    : 0;

  const scale = isDesktop
    ? useTransform(scrollYProgress, [0, 0.45], [1, endScale])
    : 1;

  return { x, y, scale };
}

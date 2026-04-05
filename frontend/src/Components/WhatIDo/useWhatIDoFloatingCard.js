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

    const updatePositions = () => {
      const s = startRef.current.getBoundingClientRect();
      const f = floatingRef.current.getBoundingClientRect();
      const t = targetRef.current.getBoundingClientRect();

      const startX = s.left + s.width / 2 - (f.left + f.width / 2);
      const startY = s.top + s.height / 2 - (f.top + f.height / 2);

      const endX = t.left + t.width / 2 - (f.left + f.width / 2);
      const endY = t.top + t.height / 2 - (f.top + f.height / 2);

      const scaleX = t.width / f.width;
      const scaleY = t.height / f.height;
      const finalScale = Math.min(scaleX, scaleY);

      setStart({ x: startX, y: startY });
      setEnd({ x: endX, y: endY });
      setEndScale(finalScale);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
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

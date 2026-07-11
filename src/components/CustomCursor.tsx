import { useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

interface CustomCursorProps {
  isHovered: boolean;
  text?: string;
}

export default function CustomCursor({ isHovered, text = "Explore more" }: CustomCursorProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (isHovered) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isHovered, cursorX, cursorY]);

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="fixed top-0 left-0 w-[84px] h-[84px] bg-[#FFDD00] rounded-full pointer-events-none z-[100] flex items-center justify-center shadow-md mix-blend-normal"
          style={{
            translateX: "-50%",
            translateY: "-50%",
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <span className="text-brand-dark text-[9px] font-bold uppercase tracking-widest text-center leading-[1.2]">
            {text.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

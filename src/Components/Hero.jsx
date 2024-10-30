import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const SECTION_HEIGHT = 1500;

const Hero = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <div
      className="relative w-full bg-primary-background"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}>
      <motion.div
        className="sticky top-0 h-screen w-full "
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />{" "}
      <div className="absolute bottom-0 left-0 right-0 h-screen bg-gradient-to-b from-primary-background/0 to-primary-background" />
    </div>
  );
};

export default Hero;

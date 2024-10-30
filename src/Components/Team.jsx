import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Team = () => {
  return (
    <div className="bg-primary-background">
      <div className="sticky top-0 flex h-[300px] items-center justify-center bg-primary-background ">
        <span className="font-semibold uppercase text-primary-text text-6xl">
          Our Team{" "}
        </span>{" "}
      </div>{" "}
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const cardWidth = 490; // Width of each card
  const totalWidth = teamMembers.length * cardWidth; // Total width of the carousel

  // Calculate the x transform based on total width to trigger vertical scroll
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${totalWidth - window.innerWidth}px`]
  );

  // State to control the vertical scroll based on horizontal scroll
  const [isScrolling, setIsScrolling] = useState(false);

  // Effect to manage scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Check if the last card has fully exited the viewport
      if (scrollTop + windowHeight >= scrollHeight) {
        setIsScrolling(false);
      } else if (scrollTop < scrollHeight - windowHeight) {
        setIsScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
          onAnimationComplete={() => {
            if (isScrolling) {
              // Allow vertical scrolling once horizontal scrolling is complete
              window.scrollTo({
                top: window.scrollY + 1, // Slight scroll to trigger vertical scrolling
                behavior: "smooth",
              });
            }
          }}>
          {" "}
          {teamMembers.map((member) => (
            <Card member={member} key={member.id} />
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
};

const Card = ({ member }) => {
  return (
    <div className="group rounded-2xl relative h-[470px] w-[470px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${member.imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
          {" "}
          {member.name}{" "}
        </p>{" "}
        <p className="text-xl text-white"> {member.position} </p>{" "}
      </div>{" "}
    </div>
  );
};

const teamMembers = [
  {
    imgUrl: "https://picsum.photos/450/450?random=1",
    name: "John Doe",
    position: "CEO",
    id: 1,
  },
  {
    imgUrl: "https://picsum.photos/450/450?random=2",
    name: "Jane Smith",
    position: "CTO",
    id: 2,
  },
  {
    imgUrl: "https://picsum.photos/450/450?random=3",
    name: "Alice Johnson",
    position: "CFO",
    id: 3,
  },
  {
    imgUrl: "https://picsum.photos/450/450?random=4",
    name: "Bob Brown",
    position: "Lead Developer",
    id: 4,
  },
  {
    imgUrl: "https://picsum.photos/450/450?random=5",
    name: "Charlie Davis",
    position: "UX Designer",
    id: 5,
  },
];

export default Team;

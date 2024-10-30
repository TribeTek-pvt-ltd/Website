import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const serviceData = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading: "Digital Transformation",
    heading: "Transform Your Business",
    description:
      "Empower your business with custom digital transformation solutions, bringing efficiency and automation to every process.",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading: "Web Development",
    heading: "Web Solutions that Scale",
    description:
      "Delivering sleek, modern websites with robust functionality to engage users and drive conversions.",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading: "Mobile App Development",
    heading: "Innovative Mobile Experiences",
    description:
      "Building mobile applications designed for functionality and seamless user experiences.",
  },
];

export const ServicesParallaxSection = () => {
  return (
    <div className="bg-primary-background">
      {" "}
      {serviceData.map((service, index) => (
        <ServiceParallaxContent
          key={index}
          imgUrl={service.imgUrl}
          subheading={service.subheading}
          heading={service.heading}>
          <ServiceContent
            heading={service.heading}
            description={service.description}
          />{" "}
        </ServiceParallaxContent>
      ))}{" "}
    </div>
  );
};

const IMG_PADDING = 12;

const ServiceParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />{" "}
        <OverlayCopy heading={heading} subheading={subheading} />{" "}
      </div>{" "}
      {children}{" "}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl">
      <motion.div
        className="absolute inset-0 bg-primary-background/35"
        style={{
          opacity,
        }}
      />{" "}
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white">
      <p className="mb-2 text-center text-primary-text text-xl md:mb-4 md:text-3xl">
        {" "}
        {subheading}{" "}
      </p>{" "}
      <p className="text-center text-4xl text-primary-brand font-bold md:text-7xl">
        {" "}
        {heading}{" "}
      </p>{" "}
    </motion.div>
  );
};

const ServiceContent = ({ description, heading }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl text-primary-brand s:text-left font-bold md:col-span-4">
      {" "}
      {heading}{" "}
    </h2>{" "}
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-primary-text text-right md:text-2xl">
        {" "}
        {description}{" "}
      </p>{" "}
      {/* <button className="w-full rounded bg-primary-background/70-9 py-4 text-xl text-white transition-colors hover:bg-primary-background/70:w-fit">
                                                                                                                                                                                        Learn more <FiArrowUpRight className="inline" />
                                                                                                                                                                                      </button> */}{" "}
    </div>{" "}
  </div>
);

export default ServicesParallaxSection;

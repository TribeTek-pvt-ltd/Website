import React, { useRef } from "react";

const ServiceComponent = () => {
  const servicesRef = useRef(null);

  const handleScrollToNext = () => {
    if (servicesRef.current) {
      // Scroll to the next external component
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex h-screen bg-primary-background">
      <div className="w-1/3 bg-primary-background text-white p-8">
        <h2 className="text-4xl font-semibold"> Our Services </h2>{" "}
        <p className="mt-4">
          We offer a variety of services to meet your needs:
        </p>{" "}
        <ul className="mt-4 space-y-2">
          <li> Consulting Services </li> <li> Project Management </li>{" "}
          <li> Software Development </li> <li> UI / UX Design </li>{" "}
          <li> Quality Assurance </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div className="w-2/3 overflow-y-auto" style={{ maxHeight: "100vh" }}>
        <div className="flex flex-wrap p-4">
          {" "}
          {services.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}{" "}
        </div>{" "}
        <button
          onClick={handleScrollToNext}
          className="mt-4 px-4 py-2 bg-primary text-white rounded">
          Scroll to Next Component{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="m-2 w-1/3">
      <div className="bg-primary-background p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold"> {service.title} </h3>{" "}
        <p> {service.description} </p>{" "}
      </div>{" "}
    </div>
  );
};

// Sample service data
const services = [
  {
    title: "Web Development",
    description: "Building responsive and interactive websites.",
  },
  {
    title: "Mobile App Development",
    description: "Creating user-friendly mobile applications.",
  },
  {
    title: "Cloud Solutions",
    description: "Implementing scalable cloud infrastructure.",
  },
  {
    title: "Data Analysis",
    description: "Analyzing data to drive business decisions.",
  },
  {
    title: "Digital Marketing",
    description: "Promoting your business through digital channels.",
  },
  {
    title: "Cybersecurity",
    description: "Ensuring your digital assets are secure.",
  },
  {
    title: "Technical Support",
    description: "Providing assistance with technical issues.",
  },
  {
    title: "SEO Optimization",
    description: "Improving your website’s visibility on search engines.",
  },
];

export default ServiceComponent;

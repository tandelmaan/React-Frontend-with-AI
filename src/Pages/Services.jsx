import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";
import Servicedesign from "./Servicedesign";

// Icons (you can replace these with SVGs or any icon library)
const WebDevIcon = () => <div>🌐</div>;
const UiUxIcon = () => <div>🎨</div>;
const SeoIcon = () => <div>🔍</div>;

const Services = () => {
  const services = [
    {
      icon: <WebDevIcon />,
      title: "Web Development",
      description: "Building responsive and high-quality websites.",
    },
    {
      icon: <UiUxIcon />,
      title: "UI/UX Design",
      description: "Designing user-friendly and engaging interfaces.",
    },
    {
      icon: <SeoIcon />,
      title: "SEO Optimization",
      description: "Improving your website’s visibility on search engines.",
    },
    {
      icon: <WebDevIcon />,
      title: "Ai",
      description: "Building responsive and high-quality websites.",
    },
    {
      icon: <UiUxIcon />,
      title: "App devlopment",
      description: "Designing user-friendly and engaging interfaces.",
    },
    {
      icon: <SeoIcon />,
      title: "Search Optimization",
      description: "Improving your website’s visibility on search engines.",
    },
  ];

  return (
    <div>
      <div className="services-container">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title} 
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div className="carddesign">
      <Servicedesign/>

      </div>
    </div>
  );
};

export default Services;

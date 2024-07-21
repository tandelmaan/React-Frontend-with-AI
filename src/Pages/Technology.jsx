import React from 'react';
import TechnologyCard from './TechnologyCard';
import './Technology.css';
import Tech from '../Reusecompo/tech';

// Icons (you can replace these with SVGs or any icon library)
const ReactIcon = () => <div>⚛️</div>;
const NodeIcon = () => <div>🌐</div>;
const MongoDBIcon = () => <div>🍃</div>;
const ExpressIcon = () => <div>🚀</div>;

const Technology = () => {
  const technologies = [
    {
      icon: <ReactIcon />,
      name: 'React',
      description: 'A JavaScript library for building user interfaces.',
    },
    {
      icon: <NodeIcon />,
      name: 'Node.js',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    },
    {
      icon: <MongoDBIcon />,
      name: 'MongoDB',
      description: 'A document-oriented NoSQL database used for high volume data storage.',
    },
    {
      icon: <ExpressIcon />,
      name: 'Express',
      description: 'A minimal and flexible Node.js web application framework.',
    },
    {
      icon: <ReactIcon />,
      name: 'Javascript',
      description: 'A JavaScript library for building user interfaces.',
    },
    {
      icon: <NodeIcon />,
      name: 'Python',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    },
    {
      icon: <MongoDBIcon />,
      name: 'Tailwind CSS',
      description: 'A document-oriented NoSQL database used for high volume data storage.',
    }
  ];

  return (
    <div className='teee'>
      <div className="technology-container">
      <h2 className="technology-heading">Technologies</h2>
      <div className="technology-grid">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            description={tech.description}
          />
        ))}
      </div>
    </div>
    <div className='tech-compo'>
      <Tech/>
    </div>
    </div>
  );
};

export default Technology;

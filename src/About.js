// src/About.js
import React, { useEffect, useState } from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/about.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching the JSON:', error));
    }, []);

    const getColor = (skillName) => {
        switch (skillName) {
            case 'HTML': return '#f44336';
            case 'CSS': return '#2196F3';
            case 'JavaScript': return '#FFEB3B';
            case 'React': return '#4CAF50';
            case 'Node.js': return '#8BC34A';
            case 'Python': return '#FFC107';
            default: return '#ccc';
        }
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="portfolio">
            <h1>{data.name}</h1>
            <h2>About Me</h2>
            <p>{data.about}</p>

            <h2>What I Do</h2>
            <p>{data.whatIDo}</p>

            <h2>My Skills</h2>
            <div id="skills">
                {data.skills.map(skill => (
                    <div className="skill-bar" key={skill.name}>
                        <span>{skill.name}</span>
                        <div className="bar">
                            <div className="progress" style={{ width: `${skill.proficiency}%`, backgroundColor: getColor(skill.name) }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <h2>Let’s Connect!</h2>
            <p>{data.connect}</p>
        </div>
    );
};

export default About;
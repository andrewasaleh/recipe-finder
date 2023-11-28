import React, { useEffect, useState } from 'react';
import './About.css';
import Footer from './Footer';

function About() {
  const [contributors, setContributors] = useState([
    { username: 'andrewasaleh', role: 'Full Stack' },
    { username: 'mchoi1129', role: 'Front-End' },
    { username: 'Deja-Who', role: 'Front-End' },
  ]);

  useEffect(() => {
    // Fetch user data from GitHub API
    const fetchData = async () => {
      try {
        const updatedContributors = await Promise.all(
          contributors.map(async (contributor) => {
            const response = await fetch(`https://api.github.com/users/${contributor.username}`, {
              headers: {
                Authorization: process.env.GIT_HUB_TOKEN_KEY, // Replace with your personal access token
              },
            });

            if (!response.ok) {
              throw new Error(`Error fetching data for ${contributor.username}: ${response.statusText}`);
            }

            const userData = await response.json();
            return { ...contributor, avatar: userData.avatar_url, profileUrl: userData.html_url };
          })
        );

        setContributors(updatedContributors);
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
      }
    };

    fetchData();
  }, [contributors]); 

  return (
    <section className="about-us">
      <div className="about-content">
        <div className="about-text">
          <h2>Meet the Team</h2>
          <p>Discover the amazing individuals behind our culinary journey.</p>
        </div>
        <div className="contributors-section">
          {contributors.map((contributor, index) => (
            <a key={index} href={contributor.profileUrl} target="_blank" rel="noopener noreferrer" className="contributor">
              <img src={contributor.avatar} alt={`Contributor ${index + 1}`} />
              <p>{contributor.username}</p>
              <p>{contributor.role}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default About;

import { useState, useEffect } from 'react';
import Footer from '../Footer';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectsStyle,
  StyledCardContainer,
} from './ProjectElements';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/patrik-fredlund/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div>
      <ProjectWrapper>
        <ProjectContainer>
          <h1>Projects</h1>

          <ProjectsStyle>
            {repos.map((repo) => (
              <StyledCardContainer>
                <h2 key={repo.id}>{repo.name}</h2>
                <p>{repo.description}</p>
                <a href={repo.html_url}>Github</a>
              </StyledCardContainer>
            ))}
          </ProjectsStyle>
        </ProjectContainer>
      </ProjectWrapper>
      <Footer />
    </div>
  );
};
export default Projects;

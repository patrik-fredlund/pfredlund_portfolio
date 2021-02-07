import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import ProfileImage from '../putte.jpg';

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-left: 100px; */
`;

const ProjectsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: white;
  max-width: 1200px;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding: 0px 5px;
  margin: 10px 10px 10px 10px;
  min-width: 300px;
`;

function Projects() {


  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/patrik-fredlund/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <ProjectWrapper>
      
      <ProjectContainer>
        <h1>Projects!</h1>
        <div className='profileImage' />
        <ProjectsStyle>
          {repos.map((repo) => (
            <StyledCard>
              <h2 key={repo.id}>{repo.name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url}>Github</a>
            </StyledCard>
          ))}
        </ProjectsStyle>
      </ProjectContainer>
    </ProjectWrapper>
  );
}
export default Projects;

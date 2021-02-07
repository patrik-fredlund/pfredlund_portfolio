import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProjectContainer = styled.div`
  margin-left: 100px;

  

  @media screen and (max-width: 480px) {
    margin-left: 0;
    & >h1 {
    margin-left: 100px;

  }
  }

 
`;

const ProjectsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  /* background-color: green; */
  max-width: 900px;
  @media screen and (max-width: 480px) {
      justify-content: space-around;

  }
`;


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding: 10px 5px;
  margin: 5px 10px 5px 0;
  /* margin-right:130px; */
  min-width: 300px;
  border-radius: 5px;

& .repo-name {
  margin-left:10px;
  
}

`;




const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/patrik-fredlund/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <ProjectWrapper>
      <ProjectContainer>
        <h1>Projects</h1>
    
        <ProjectsStyle>
          {repos.map((repo) => (
            <StyledCard>
              <h2 className='repo-name' key={repo.id}>{repo.name}</h2>
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

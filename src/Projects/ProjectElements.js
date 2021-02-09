import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectContainer = styled.div`
  margin-left: 70px;

  @media screen and (max-width: 480px) {
    margin-left: 0;
    & > h1 {
      margin-left: 30px;
    }
  }
`;

export const ProjectsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;

  @media screen and (max-width: 480px) {
    justify-content: space-around;
  }
`;

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  padding: 10px 5px;
  margin: 5px 25px 25px 0;
  min-width: 300px;
  background-color: #00ccff;
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 40%);
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  @media screen and (max-width: 480px) {
    margin: 5px 5px 25px 0;
    padding: 10px 5px;
  }
  & > h2,
  p,
  a {
    margin-left: 10px;
    color: white;
  }
`;

import styled from 'styled-components';

// fixa highlight hovcer

export const ProjectPickWrapper = styled.div`
  padding: 5px;
  max-width: 1100px;
  margin-left: 70px;
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }
`;

export const ProjectItemCard = styled.div`
  border-radius: 10px;
  max-width: 300px;
  padding: 25px 25px 25px 25px;
  background-color: rgb(265, 255, 245, 0.8);
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 500px;
  text-align: center;
  transition: transform 450ms;

  :hover {
    background-color: rgb(265, 265, 265, 0.8);
    transform: scale(1.05);
  }

  h2,
  h4 {
    color: black;

    :hover {
      color: #00ccff;
    }
  }
  p {
    font-weight: 100;
    color: black;
    line-height: 25px;
    font-size: 0.8em;
  }

  img {
    width: 300px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

//----------github repos----------//

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    align-items: center;
  }
`;

export const ProjectContainer = styled.div`
  margin-left: 70px;

  @media screen and (max-width: 480px) {
    justify-content: center;
    margin-left: -10px;
    font-size: 0.8em;
    width: 300px;
  }
`;

export const ProjectsStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 600px;

  @media screen and (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    color: green;
  }
`;

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  flex-wrap: wrap;
  border-bottom: 0.5px solid grey;

  padding: 5px 5px;
  margin: 5px 5px;
  font-weight: 100;
  margin-left: 10px;

  & > h3,
  p {
    color: white;
    margin-left: 10px;
  }

  a {
    color: var(--main-font-color);
    margin-left: 10px;
  }

  a:hover {
    color: white;
    margin-left: 10px;
  }
`;

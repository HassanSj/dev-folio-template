import React from "react";
import styled from "styled-components";
import ResumeCardList from "./ResumeCardList";
import ResumeCard from "./ResumeCard";

const ExperienceContent = () => {
  return (
    <ExperienceContentContainer>
      <span>Experience</span>
      <ResumeCardList>
      <ResumeCard
          title="Full Stack Developer"
          info={`CyberSoftVantage / Jan 2023- Present`}
          description="Completed final year project and many other neural network projects on fiverr using python"
        />
        <ResumeCard
          title="Junior Developer"
          info={`BLS Solutions / Jul 2022- Dec 2022`}
          description="Completed final year project and many other neural network projects on fiverr using python"
        />
        <ResumeCard
          title="Development Intern ReactJS"
          info={`Programin Studio / Jul 2021- Oct 2022`}
          description="Completed final year project and many other neural network projects on fiverr using python"
        />
       
      </ResumeCardList>
    </ExperienceContentContainer>
  );
};

export default ExperienceContent;

const ExperienceContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.secondary};

    @media (max-width: 767.98px) {
      font-size: 20px;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
    }
  }
`;

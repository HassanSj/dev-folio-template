import React from "react";
import styled from "styled-components";
import { FaTwitterSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const AboutSocialIcons = () => {
  return (
    <AboutSocialIconsContainer>
      <a
        href="https://github.com/hassansj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/hassan-s-881607224/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="https://facebook.com/salaar.khan.7927408"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare size={22} />
      </a>
    </AboutSocialIconsContainer>
  );
};

export default AboutSocialIcons;

const AboutSocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.4;
  gap: 22px;
  width: 100%;
  padding-top: 5px;

  @media (max-width: 479.98px) {
    gap: 40px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
    opacity: 0.8;

    :hover {
      color: ${({ theme }) => theme.primary};
      transition: all 0.5s ease;
    }
  }

  svg {
    cursor: pointer;
  }
`;

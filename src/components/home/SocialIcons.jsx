import React from "react";
import styled from "styled-components";
import {  FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
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
    </SocialIconsContainer>
  );
};

export default SocialIcons;

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: flex-end;
  gap: 30px;
  margin-right: 50px;
  margin-top: -50px;

  @media (max-width: 767.98px) {
    flex-direction: row;
    margin-right: 20px;
    margin-top: -20px;
  }
  @media (max-width: 479.98px) {
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: #fff;
    opacity: 0.8;

    :hover {
      color: ${({ theme }) => theme.primary};
      transition: all 1s ease;
    }
  }

  svg {
    cursor: pointer;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@hooks';

const StyledThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: var(--light-navy);
  color: var(--green);
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  z-index: 10;

  &:hover {
    background-color: var(--lightest-navy);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid var(--green);
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: var(--transition);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <StyledThemeToggle
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </StyledThemeToggle>
  );
};

export default ThemeToggle;

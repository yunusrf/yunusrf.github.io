import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <div>&copy; {new Date().getFullYear()} Yunus Parvej. All rights reserved.</div>
  </StyledFooter>
);

export default Footer;

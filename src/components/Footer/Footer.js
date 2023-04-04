import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href='tel:+2340732643194'></LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:okaliwedaniel@gmail.com'></LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at at time</Slogan>
        </CompanyContainer>
        <SocialContainer>
             <SocialIcons href='https://github.com/Okaliwe'>
              <AiFillGithub size='3rem'/>
            </SocialIcons>
            <SocialIcons href='https://linkedin.com/in/okaliwe-daniel-o-a8625a228'>
              <AiFillLinkedin size='3rem'/>
            </SocialIcons>
            <SocialIcons href='https://www.instagram.com/okaliwe'>
              <AiFillInstagram size='3rem'/>
            </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

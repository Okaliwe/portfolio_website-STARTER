import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/> Engr Okaliwe Daniels Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of building great and amazing websites such as e-commers,sport,fintech,educational website is to facilitate the completion of one or more task with amazing result
      </SectionText>
      <Button ><a href="mailto:okaliwedaniel@gmail.com">Learn more</a></Button>
    </LeftSection>
  </section>
);

export default Hero;
import { useState } from 'react';
import Skill from '../Skill/Skill';
import ScrollToSomewhere from '../../UtilityComponents/ScrollToSomewhere/ScrollToSomewhere';
import { categorizedSkills, defaultSkillArea } from '../../../CONSTANT/CONSTANT';
import { SkillsContainer, SkillsTitle,SkillsAreaContainer } from './ListSkill.styled';
import { PortfolioSectionNavbar, PortfolioSectionNavItem } from '../../../styles/common.styled';

export default function ListSkills() {
  const [selectedArea, setSelectedArea] = useState(defaultSkillArea);

  // Get unique skill area
  const skillArea = ['All', ...new Set(categorizedSkills.map(area => area.relatedArea))];

  // Filter skill area based on the selected skill area
  const filteredSkillArea = selectedArea === 'All' ? categorizedSkills : categorizedSkills.filter(area => area.relatedArea === selectedArea)
  
  return (
   
    <SkillsContainer>
        <SkillsTitle id='technical-skills-title'>
          Technical Skills
        </SkillsTitle>
        
        <PortfolioSectionNavbar>
          {skillArea.map(area => (
          
              <PortfolioSectionNavItem
              key={area}
              onClick={() => setSelectedArea(area)} 
              isSelected={selectedArea === area}>
                  {area}
              </PortfolioSectionNavItem>
          ))}
      </PortfolioSectionNavbar>

      <SkillsAreaContainer >
          {filteredSkillArea.map((skillGroup) => (
              <Skill
              key={skillGroup.relatedArea}
              isOpen={selectedArea === 'All' || selectedArea === skillGroup.relatedArea}
              skillGroup={skillGroup}
              />
          ))}
      </SkillsAreaContainer>

      {/* Show go to top button only when All skills is selected */}
      {selectedArea === 'All' &&  <ScrollToSomewhere label={'Back to Top'} id={'technical-skills-title'}/>}
      
    </SkillsContainer>
  
  );
}
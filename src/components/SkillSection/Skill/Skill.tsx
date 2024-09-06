import { useEffect, useState } from 'react';

import type { CategorizedSkill} from '../../../CONSTANT/CONSTANT.types';
import { 
    SkillsCard,
    SkillsContainer,
    SkillsCategory,
    SkillStyled,
    SkillIcon,
    SkillBar,
    SkillLevel, 
    SkillName
} from './Skill.styled';

type SkillProps = {
    skillGroup: CategorizedSkill;
    isOpen: boolean
}
export default function Skill({ skillGroup, isOpen }: SkillProps) {
    const [loaded, setLoaded] = useState(false);



    useEffect(() => {
        setLoaded(true); // Trigger the animation once the component mounts
    }, []);

    
    return (
            
            <SkillsCard isOpen={isOpen}>
                <SkillsCategory>
                    {skillGroup.relatedArea}
                </SkillsCategory>

                <SkillsContainer isOpen={isOpen}>
                    {skillGroup.skills.map((skill) => (
                            <SkillStyled key={skill.name}>

                                <SkillIcon className={skill.icon}/>

                                <SkillName>
                                    {skill.name}
                                </SkillName>

                                <SkillBar className="skill-bar">
                                    <SkillLevel level={skill.level} loaded={loaded}/>
                                </SkillBar>

                            </SkillStyled>
                    ))}
                </SkillsContainer>
            </SkillsCard>

        
            
       
    );
}
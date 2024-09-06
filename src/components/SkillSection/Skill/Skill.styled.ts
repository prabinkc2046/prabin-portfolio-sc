import styled from "styled-components";



export const SkillsContainer = styled.div<{isOpen: boolean}>`
    max-height: 0; /* Initially hidden */
    overflow: hidden;
    transition: max-height 1s ease-out, transform 1s ease-out; /* Smooth transition for height and transform */
    transform: translateZ(-100px); /* Initial 3D effect for hidden state */
    opacity: 0; /* Initially transparent */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;


`

export const SkillsCard = styled.div<{isOpen: boolean}>`
    border: 1px solid var(--secondary-bg);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for transform and shadow */
    perspective: 1000px; /* Adding perspective to give 3D effect */
    overflow: hidden; /* Ensures content does not overflow */
    position: relative; /* Position relative to control z-index changes */
    background-color: var(--secondary-bg);


    &:hover {
        transform: translateZ(10px) scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }

    &:hover ${SkillsContainer}{
        max-height: 500px; /* Expand to show the content (adjust max-height as needed) */
        transform: translateZ(0); /* Bring it back to the normal plane */
        opacity: 1; /* Fade in on hover */
    }

    ${({isOpen}) => 
        isOpen && `
        transform: translateZ(10) scale(1.05); /* Reset transform when opened */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Keep the shadow steady when open */

        ${SkillsContainer} {
            max-height: 500px;
            transform: translateZ(0);
            opacity: 1;
        }
  
        `
    }

`

// Category heading
export const SkillsCategory = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

// Individual skill item
export const SkillStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
`;

// Icon for the skill
export const SkillIcon = styled.i`
  font-size: 24px;
  color: #0072ff;
`;

// Name of the skill
export const SkillName = styled.span`
  font-weight: bold;
`;

// Bar that shows the skill level
export const SkillBar = styled.div`
    background-color: #c4bfbf;
    border-radius: 5px;
    width: 100%;
    height: 10px;
    overflow: hidden;
  
`;
  
export const SkillLevel = styled.div<{ loaded: boolean, level: number}>`
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    height: 100%;
    border-radius: 5px;
    width: 0px;

    ${({loaded, level}) => loaded && 
    `
    transition: width 1.5s ease-in-out; /* Ensuring smooth transition when loaded */
    width: ${level}%;
    `
    }
`;
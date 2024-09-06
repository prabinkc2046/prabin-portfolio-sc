import styled from "styled-components";

export const ExpandableParagraphStyled = styled.p<{expanded: boolean}>`
    max-height: 6em; /* Limit height to show only a few lines initially */
    overflow: hidden; /* Hide overflowing content */
    cursor: pointer;
    position: relative;
    transition: max-height 1.5 ease; /* Smooth transition for expansion and collapse */


    &::after {
        content: 'Show more'; /* Text to indicate expandable content */
        background: linear-gradient(to right, transparent, white); /* Gradient effect to fade text */
        padding-left: 5px;
        font-size: 0.8em;
        color: #007bff;
        display: inline-block;
        pointer-events: none; /* Ensures only the paragraph is clickable */
        opacity: 0.6; /* Subtle visual hint */
    }

    ${({expanded}) =>
        expanded && 
        `
         max-height: 100vh; /* Expand to show full content */
         transition: max-height 2s ease;

         &::after {
            content: 'Show less'; /* Remove content when expanded */

         }
        `
        
    }

`

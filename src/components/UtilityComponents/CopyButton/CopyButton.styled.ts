import styled from "styled-components";

export const CopyButtonStyled = styled.button<{isCopied: boolean}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    font-size: 1.5rem;
    color: #333;
    background-color:inherit;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    margin-right: 1rem;


    &:hover{
      background-color: #e0e0e0;
    }

    ${({isCopied}) => 
    isCopied &&
    `
    color: #28a745; /* Green color to indicate success */
    background-color: #d4edda; /* Light green background */
    border-color: #c3e6cb; /* Border color for success state */
    font-size: 1rem;
    `  
  }

  /* Media query for screen width 600px and above */
  @media (min-width: 600px) {
    margin-right: 0;
  }
`

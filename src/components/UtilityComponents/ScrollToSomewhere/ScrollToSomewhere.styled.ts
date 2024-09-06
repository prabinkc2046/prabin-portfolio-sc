import styled from "styled-components";


export const ScrollToSomewhereButton = styled.button<{visible: boolean}>`
    background-color: #007bff;
    color: #ffffff; 
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    margin-top: 10px;

    &:hover{
        background-color: #0056b3;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:focus{
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
    }

    &:focus{
        background-color: #0057b31e;
        transform: scale(1.05);
    }

    &:focus-visible{
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
    }

    ${({visible}) => 
    visible && `
    opacity: 1;
    `
    }

`

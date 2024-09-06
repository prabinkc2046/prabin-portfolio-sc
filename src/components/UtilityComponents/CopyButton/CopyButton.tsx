import { useState } from 'react';
import { CopyButtonStyled } from './CopyButton.styled';

// Define the type for the component's props
type CopyButtonProps = {
  link: string;  // The link to copy
  text?: string; // The optional text to display next to the icon
};

const CopyButton = ({ link, text }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setIsCopied(true); // Set state to show visual feedback

        // Reset the visual feedback after 2 seconds
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Error copying text:', err);
      });
  };

  return (
    <CopyButtonStyled isCopied={isCopied} onClick={handleCopy}>
        <i className={`fas fa-${isCopied ? 'check' : 'copy'}`}></i> 
        {isCopied ? 'Copied!' : text}
    </CopyButtonStyled>
    
  );
};

export default CopyButton;

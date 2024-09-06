import {useState} from 'react'
import { ExpandableParagraphStyled } from './ExpandableParagraph.styled';

type ExpandableParagraphProps = {
    text: string,
    wordsCount?: number
}
export const ExpandableParagraph = ({text, wordsCount=5}: ExpandableParagraphProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    const words = text.split(' ');
    const textToShow = isExpanded ? text : words.slice(0, wordsCount).join(' ') + ' . . .';
  
return (
  
  <ExpandableParagraphStyled expanded={isExpanded} onClick={handleToggle}>
    {textToShow}
  </ExpandableParagraphStyled>


  
  )
}

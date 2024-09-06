import { useEffect, useState } from 'react';
import { ScrollToSomewhereButton } from './ScrollToSomewhere.styled';

type ScrollToSomewhereProp = {
    id: string;
    label?: string;
    delayTime?: number
}

export default function ScrollToSomewhere({id, label='Go somewhere', delayTime=1000}: ScrollToSomewhereProp) {
const [visible, setVisible] = useState(false)

useEffect(() => {
  if(delayTime){
    const timer = setTimeout(() => {
      setVisible(true)
    }, delayTime);
    
    return () => {
      clearTimeout(timer);
    }
  }

  return () => {};
  
},[delayTime])

const handleScroll = () => {
    const element = document.getElementById(id);
    console.log(id)
    if(element){
        element.scrollIntoView();
    }
}
  return (
  
    <ScrollToSomewhereButton onClick={handleScroll} visible={visible}>
      {label}
    </ScrollToSomewhereButton>
  )
}

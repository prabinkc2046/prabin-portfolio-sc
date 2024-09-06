import { useEffect, useState } from 'react';
import './ScrollToSomewhere.css';


type ScrollToSomewhereProp = {
    id: string;
    label?: string;
    delayTime?: number
}

export default function ScrollToSomewhere({id, label, delayTime=1000}: ScrollToSomewhereProp) {
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
    <button onClick={handleScroll} className={`scroll-to-somewhere-button ${visible ? 'visible' : ''}`}>
      {label ? label : 'Go somewhere'}
    </button>
  )
}

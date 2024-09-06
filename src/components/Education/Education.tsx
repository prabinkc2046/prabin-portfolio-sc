import { useEffect, useState } from 'react';
import './Education.css';
import { universities } from '../../CONSTANT/CONSTANT';

export default function Education() {
  const [openCard, setOpenCard] = useState<string | null>('Melbourne Institute of Technology'); // State to manage the open card
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth < 900)
  


  // Handle hover for larger screens
  const handleCardHover = (name: string, isHover: boolean) => {
    if (!isTablet) {
      setOpenCard(isHover ? name : null); // Only allow one card to be hovered at a time
    }
  };

  useEffect(() => {
    const handleScreenSize = () => {
      setIsTablet(window.innerWidth < 900);
    }
    window.addEventListener('resize', handleScreenSize);
    return () => {
      window.removeEventListener('resize', handleScreenSize)
    }
  },[])

  const handleCardClick = (name: string) => {
    setOpenCard((prevOpenCard) => prevOpenCard === name ? null : name);
    
  }
  return (
    <>
      <div className="card education">
        <h3>Education</h3>
        <div className="education-card-container">
          {universities.map((uni) => (
            <div
              key={uni.name}
              id={uni.name}
              className={`education-card ${openCard === uni.name ? 'open' : ''}`}
              onClick={() => handleCardClick(uni.name)}
              onDoubleClick={() => handleCardClick(uni.name)}
              onMouseEnter={() => handleCardHover(uni.name, true)}
              onMouseLeave={() => handleCardHover(uni.name, false)}
            >
                <div className='education-detail'>
                  <h4>{uni.name}</h4>
                  <p>{uni.degree}</p>
                  <p>Graduated: {uni.finishedYear}</p>
                  <p>Score: {uni.score}</p>
                </div>
              {openCard === uni.name && (
                <div className={`subjects ${openCard === uni.name ? 'open' : ''}`}>
                  {uni.subjects.map((subject, index) => (
                    <div key={index} className="subject card">
                      <p><span>{subject.name}</span> <span className='score'>{subject.score}</span></p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

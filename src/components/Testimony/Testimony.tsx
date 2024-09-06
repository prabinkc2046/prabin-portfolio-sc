import './Testimony.css';
import { testimonies } from '../../CONSTANT/CONSTANT';
import { ExpandableParagraph } from '../UtilityComponents/ExpandableParagraph/ExpandableParagraph';
export default function Testimony() {   
   
  return (
   <>
   <div className="card testimony">
        <h3>Testimonies</h3>
        <div className="testimony-container">
          {testimonies.map((testimony, index) => (
            <div className="testimony-card" key={index}>
              <p><strong>{testimony.name}</strong>, {testimony.position}</p>
              <ExpandableParagraph 
              wordsCount={10} 
              text={testimony.testimony}
              />
            </div>
          ))}
        </div>
      </div>
   </>
  )
}
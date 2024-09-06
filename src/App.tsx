import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import './styles/common.styles.css';

// Import your components
import Navbar from "./components/Layout/Navbar/Navbar";
import ListSkills from "./components/SkillSection/ListSkill/ListSkill";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";
import Repository from "./components/Repository/Repository";
import Testimony from "./components/Testimony/Testimony";
import Footer from "./components/Layout/Footer/Footer";
import ProjectList from "./components/ProjectSection/ProjectList/ProjectList";
import { PortFolioPageSection } from "./components/PortFolioPageSection/PortFolioPageSection";
function App() {
  return (
    <>
      <Navbar />
      
      <div className="App">
        
        {/* Personal Information Section */}
        <PortFolioPageSection id="personal-info">
          <PersonalInfo />
        </PortFolioPageSection>
        
        {/* Skills Section */}
        <PortFolioPageSection id="skills">
          <ListSkills />
        </PortFolioPageSection>
        
        {/* Experience Section */}
        <PortFolioPageSection id="experience">
          <Experience />
        </PortFolioPageSection>
        
        {/* Projects Section */}
        <PortFolioPageSection id="projects">
          <ProjectList />
        </PortFolioPageSection>
        
        {/* Repositories Section */}
        <PortFolioPageSection id="repositories">
          <Repository />
        </PortFolioPageSection>
        
        {/* Education Section */}
        <PortFolioPageSection id="education">
          <Education />
        </PortFolioPageSection>
        
        {/* Testimony Section */}
        <PortFolioPageSection id="testimony">
          <Testimony />
        </PortFolioPageSection>
        
        {/* Contact Section */}
        <PortFolioPageSection id="contact">
          <Contact />
        </PortFolioPageSection>

        {/* Toast Notifications */}
        <ToastContainer />
      </div>

      <Footer /> 
    </>
  );
}

export default App;

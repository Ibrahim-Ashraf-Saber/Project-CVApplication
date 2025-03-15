import Header from "./components/header";
import SaveResume from "./components/SaveResume";
import GeneralInformation from "./components/GeneralInformation";
import EducationExperience from "./components/EducationExperience";
import ProfessionalExpercience from "./components/ProfessionalExpercience";
import CV from "./components/CV";
import { useState } from "react";

function App() {
  // General Information
  const [generalInfo, setGeneralInfo] = useState({
    show: false,
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Education
  const [educationInfo, setEducationInfo] = useState({
    show: false,
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  // Professional Experience
  const [experienceInfo, setExperienceInfo] = useState({
    show: false,
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  // Theme
  const [theme, setTheme] = useState("#0e374e");

  const handleChangeTheme = (color) => {
    setTheme(color);
  };

  return (
    <>
      <Header />
      <div className="content">
        <div className="left">
          <SaveResume />
          <div className="themes">
            Themes:
            <div className="themes-btns">
              <div
                className="theme-1"
                style={{ backgroundColor: "#0e374e" }}
                onClick={() => handleChangeTheme("#0e374e")}
              ></div>
              <div
                className="theme-2"
                style={{ backgroundColor: "#d45113" }}
                onClick={() => handleChangeTheme("#d45113")}
              ></div>
              <div
                className="theme-3"
                style={{ backgroundColor: "#214e34" }}
                onClick={() => handleChangeTheme("#214e34")}
              ></div>
              <div
                className="theme-3"
                style={{ backgroundColor: "#2b193d" }}
                onClick={() => handleChangeTheme("#2b193d")}
              ></div>
              <div
                className="theme-3"
                style={{ backgroundColor: "#432818" }}
                onClick={() => handleChangeTheme("#432818")}
              ></div>
            </div>
          </div>
          <GeneralInformation setGeneralInfo={setGeneralInfo} theme={theme} />
          <EducationExperience
            setEducationInfo={setEducationInfo}
            theme={theme}
          />
          <ProfessionalExpercience
            setExperienceInfo={setExperienceInfo}
            theme={theme}
          />
        </div>
        <div className="right">
          <CV
            theme={theme}
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
          />
        </div>
      </div>
    </>
  );
}

export default App;

import "../styles/educationExperienceStyle.css";
import icon from "../assets/icons/education.png";
import expandMoreIcon from "../assets/icons/expand-more.png";
import expandLessIcon from "../assets/icons/expand-less.png";
import InputText from "./InputText";
import { useState } from "react";

function EducationExperience({ setEducationInfo }) {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState({
    show: false,
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const handleSave = () => {
    if (
      !info.university ||
      !info.degree ||
      !info.startDate ||
      !info.endDate ||
      !info.location
    ) {
      setError("Enter All Fileds");
      return;
    }

    setEducationInfo((prev) => ({ ...prev, ...info, show: true }));
    setError("");
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <img src={icon} width="20" />
          Education Experience
        </div>
        <img
          onClick={handleShow}
          src={isShow ? expandLessIcon : expandMoreIcon}
          width="20"
          className="expandIcon"
        />
      </div>
      {isShow && (
        <>
          <InputText
            label="School"
            placeholder="Enter school / university"
            value={info.university}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, university: e.target.value }))
            }
          />
          <InputText
            label="Degree"
            placeholder="Enter Degree / Field Of Study"
            value={info.degree}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, degree: e.target.value }))
            }
          />
          <InputText
            label="Start Date"
            placeholder="Enter Start Date"
            value={info.startDate}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, startDate: e.target.value }))
            }
          />
          <InputText
            label="End Date"
            placeholder="Enter End Date"
            value={info.endDate}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, endDate: e.target.value }))
            }
          />
          <InputText
            label="Location"
            placeholder="Enter Location"
            value={info.location}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, location: e.target.value }))
            }
          />
          {error && <div className="error">{error}</div>}
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default EducationExperience;

import "../styles/professionalExpercienceStyle.css";
import icon from "../assets/icons/work.png";
import expandMoreIcon from "../assets/icons/expand-more.png";
import expandLessIcon from "../assets/icons/expand-less.png";
import InputText from "./InputText";
import { useState } from "react";

function ProfessionalExpercience({ setExperienceInfo }) {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState({
    show: false,
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const handleSave = () => {
    if (
      !info.company ||
      !info.position ||
      !info.startDate ||
      !info.endDate ||
      !info.location ||
      !info.description
    ) {
      setError("Enter All Fileds");
      return;
    }

    setExperienceInfo((prev) => ({ ...prev, ...info, show: true }));
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
          src={isShow ? expandLessIcon : expandMoreIcon}
          width="20"
          className="expandIcon"
          onClick={handleShow}
        />
      </div>
      {isShow && (
        <>
          <InputText
            label="Company Name"
            placeholder="Enter Company Name"
            value={info.company}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, company: e.target.value }))
            }
          />
          <InputText
            label="Position Title"
            placeholder="Enter Position Title"
            value={info.position}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, position: e.target.value }))
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
          <InputText
            label="Description"
            placeholder="Enter Description"
            value={info.description}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, description: e.target.value }))
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

export default ProfessionalExpercience;

import "../styles/generalInformationStyle.css";
import icon from "../assets/icons/personal.png";
import expandMoreIcon from "../assets/icons/expand-more.png";
import expandLessIcon from "../assets/icons/expand-less.png";
import InputText from "./InputText";
import { useState } from "react";

function GeneralInformation({ setGeneralInfo }) {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");

  const [info, setInfo] = useState({
    show: false,
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const handleSave = () => {
    if (!info.name || !info.email || !info.phone || !info.address) {
      setError("Enter All Fileds");
      return;
    }

    setGeneralInfo((prev) => ({ ...prev, ...info, show: true }));
    setError("");
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <img src={icon} width="20" />
          General Information
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
            label="Full name"
            placeholder="First and last name"
            value={info.name}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <InputText
            label="Email"
            placeholder="Enter email"
            value={info.email}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputText
            label="Phone number"
            placeholder="Enter phone number"
            value={info.phone}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
          <InputText
            label="Address"
            placeholder="City, Country"
            value={info.address}
            handleChange={(e) =>
              setInfo((prev) => ({ ...prev, address: e.target.value }))
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

export default GeneralInformation;

import "../styles/cvStyle.css";

const CV = ({ generalInfo, educationInfo, experienceInfo, theme }) => {
  const styleTheme = {
    color: theme,
  };

  const styleTheme2 = {
    backgroundColor: theme,
  };

  return (
    <div className="containerr" id="cv">
      {generalInfo.show && (
        <div className="sec-1" style={styleTheme2}>
          <div className="your-name">{generalInfo.name}</div>
          <div className="your-info">
            <div>
              <i class="fa-solid fa-envelope"></i>
              {generalInfo.email}
            </div>
            <div>
              <i class="fa-solid fa-phone"></i>
              {generalInfo.phone}
            </div>
            <div>
              <i class="fa-solid fa-location-dot"></i>
              {generalInfo.address}
            </div>
          </div>
        </div>
      )}
      {educationInfo.show && (
        <div className="sec-2">
          <div className="header-title" style={styleTheme}>
            Education
          </div>
          <div>
            <div className="sec2-content">
              <div className="sec2-left">
                <div>
                  {educationInfo.startDate} – {educationInfo.endDate}
                </div>
                <div>{educationInfo.location}</div>
              </div>
              <div className="sec2-right">
                <div className="uni">{educationInfo.university}</div>
                <div>{educationInfo.degree}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {experienceInfo.show && (
        <div className="sec-2">
          <div className="header-title" style={styleTheme}>
            Professional Experience
          </div>
          <div>
            <div className="sec2-content">
              <div className="sec2-left">
                <div>
                  {experienceInfo.startDate} – {experienceInfo.endDate}
                </div>
                <div>{experienceInfo.location}</div>
              </div>
              <div className="sec2-right">
                <div className="uni">{experienceInfo.company}</div>
                <div>{experienceInfo.position}</div>
                <div className="desc">{experienceInfo.description}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CV;

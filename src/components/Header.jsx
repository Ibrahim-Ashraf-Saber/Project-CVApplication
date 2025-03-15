import "../styles/headerStyle.css";
import icon from "../assets/icons/cv.png";
import githubIcon from "../assets/icons/github.svg";

function Header() {
  return (
    <div className="contanier">
      <div className="logo">
        <img src={icon} width="25" />
        <div>CV Generator</div>
      </div>
      <a
        href="https://github.com/Ibrahim-Ashraf-Saber"
        target="_blank"
        className="my-account"
      >
        <img src={githubIcon} width="25" />
        Ibrahim Ashraf
      </a>
    </div>
  );
}

export default Header;

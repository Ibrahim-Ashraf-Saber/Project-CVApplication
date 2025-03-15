import "../styles/inputTextStyle.css";

function InputText({ label, placeholder, value, handleChange }) {
  return (
    <div className="input-box">
      <div>{label}</div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputText;

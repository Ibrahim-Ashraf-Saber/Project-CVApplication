import "../styles/saveResumeStyle.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function SaveResume() {
  const handlePrint = () => {
    const input = document.getElementById("cv");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("cv.pdf");
    });
  };

  return (
    <div className="containter">
      <div>Save Your Resume</div>
      <button onClick={handlePrint}>Download</button>
    </div>
  );
}

export default SaveResume;

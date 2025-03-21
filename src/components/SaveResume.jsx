import "../styles/saveResumeStyle.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function SaveResume() {
  // Help With Chat GPT To Print Function
  const handlePrint = () => {
    const input = document.getElementById("cv");
    input.style.width = "21cm";
    input.style.height = "29.7cm";

    html2canvas(input, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
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

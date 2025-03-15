import "../styles/saveResumeStyle.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const handlePrint = () => {
  const input = document.getElementById("cv");

  html2canvas(input, {
    scale: 2, // زيادة الدقة للشاشات عالية الدقة
    useCORS: true, // إذا كنت تستخدم صور من مصادر خارجية
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait", // أو 'landscape' إذا كنت تريد اتجاه أفقي
      unit: "mm",
      format: "a4", // أو أي حجم آخر تريده
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("cv.pdf");
  });

  return (
    <div className="containter">
      <div>Save Your Resume</div>
      <button onClick={handlePrint}>Download</button>
    </div>
  );
};

export default SaveResume;

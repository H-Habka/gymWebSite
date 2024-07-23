import React from "react"
import passportPDF from "../../assets/passport.pdf"
import GradesPDF from "../../assets/Grades.pdf"
import PDFViewer from "./PDFViewer"

const OfficialDocs = () => {
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-4">
      {/* <a href={pdfFile} download>
        asdas
      </a> */}
      <a href={passportPDF} download>
        <PDFViewer
          title="Strength Training"
          imgPath={require("../../images/passport.webp")}
        />
      </a>
      <a href={GradesPDF} download>
        <PDFViewer
          title="Strength Training"
          imgPath={require("../../images/Grades.webp")}
        />
      </a>
    </div>
  )
}

export default OfficialDocs

import React from "react"
import PDFViewer from "./PDFViewer"

const OfficialDocs = () => {
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-4">
      <a href="/preview/AlBaselCertificate" target="_blank">
        <PDFViewer title="Al Basel Certificate" />
      </a>
      <a href="/preview/BasicTrainingAndSecurityAwareness">
        <PDFViewer title="Basic Training & Security Awareness" />
      </a>
      <a href="/preview/BasicTrainingAndSecurityAwareness2">
        <PDFViewer title="Basic Training & Security Awareness" />
      </a>
      <a href="/preview/CertificateOfAppreciationFromTheEngineersSyndicate">
        <PDFViewer title="Certificate Of Appreciation From The Engineers Syndicate" />
      </a>
      <a href="/preview/CertificateOfTheDiplomaOfGeneralSecondaryStudies">
        <PDFViewer title="Certificate Of The Diploma Of General Secondary Studies" />
      </a>
      <a href="/preview/GradesSheet">
        <PDFViewer title="Grades Sheet" />
      </a>
      <a href="/preview/LanguageExamForMasterDegree">
        <PDFViewer title="Language Exam For Master Degree" />
      </a>
      <a href="/preview/MarineEngineeringGraduationDocument">
        <PDFViewer title="Marine Engineering Graduation Document" />
      </a>
      <a href="/preview/MaritimeMedicalCertificate">
        <PDFViewer title="Maritime Medical Certificate" />
      </a>
      <a href="/preview/MasterLanguageExam">
        <PDFViewer title="Master Language Exam" />
      </a>
    </div>
  )
}

export default OfficialDocs

import React from "react"
import PDFViewer from "./PDFViewer"

const pdfFiles = [
  { title: "Al Basel Certificate", to: "/preview/AlBaselCertificate" },
  {
    title: "Basic Training & Security Awareness",
    to: "/preview/BasicTrainingAndSecurityAwareness",
  },
  {
    title: "Basic Training & Security Awareness",
    to: "/preview/BasicTrainingAndSecurityAwareness2",
  },
  {
    title: "Certificate Of Appreciation From The Engineers Syndicate",
    to: "/preview/CertificateOfAppreciationFromTheEngineersSyndicate",
  },
  {
    title: "Certificate Of The Diploma Of General Secondary Studies",
    to: "/preview/CertificateOfTheDiplomaOfGeneralSecondaryStudies",
  },
  { title: "Grades Sheet", to: "/preview/GradesSheet" },
  {
    title: "Language Exam For Master Degree",
    to: "/preview/LanguageExamForMasterDegree",
  },
  {
    title: "Marine Engineering Graduation Document",
    to: "/preview/MarineEngineeringGraduationDocument",
  },
  {
    title: "Maritime Medical Certificate",
    to: "/preview/MaritimeMedicalCertificate",
  },
  { title: "Master Language Exam", to: "/preview/MasterLanguageExam" },
  { title: "My CV", to: "/preview/MyCV" },
  {
    title: "Certificate Of Experience",
    to: "/preview/CertificateOfExperience",
  },
]

const OfficialDocs = () => {
  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-4">
      {pdfFiles.map((file) => (
        <PDFViewer key={file.to} to={file.to} title={file.title} />
      ))}
    </div>
  )
}

export default OfficialDocs

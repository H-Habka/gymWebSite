import React from "react"
import AlBaselCertificate from "../../assets/Al-Basel-Certificate.pdf"
import BasicTrainingAndSecurityAwareness from "../../assets/Basic-Training-&-security-awareness.pdf"
import BasicTrainingAndSecurityAwareness2 from "../../assets/Basic-Training-&-security-awareness2.pdf"
import CertificateOfAppreciationFromTheEngineersSyndicate from "../../assets/Certificate-of-appreciation-from-the-Engineers-Syndicate.pdf"
import CertificateOfTheDiplomaOfGeneralSecondaryStudies from "../../assets/Certificate-of-the-Diploma-of-general-secondary-studies.pdf"
import GradesSheet from "../../assets/Grades-sheet.pdf"
import LanguageExamForMasterDegree from "../../assets/Language-exam-For-Master-Degree.pdf"
import MarineEngineeringGraduationDocument from "../../assets/Marine-Engineering-Graduation-Document.pdf"
import MaritimeMedicalCertificate from "../../assets/maritime-medical-certificate.pdf"
import MasterLanguageExam from "../../assets/Master-language-exam.pdf"
import { useParams } from "react-router-dom"

const pdfSelector = {
  AlBaselCertificate,
  BasicTrainingAndSecurityAwareness,
  BasicTrainingAndSecurityAwareness2,
  CertificateOfAppreciationFromTheEngineersSyndicate,
  CertificateOfTheDiplomaOfGeneralSecondaryStudies,
  GradesSheet,
  LanguageExamForMasterDegree,
  MarineEngineeringGraduationDocument,
  MaritimeMedicalCertificate,
  MasterLanguageExam,
}

const PDFPreviewPage = () => {
  const params = useParams()
  return (
    <object
      aria-label="pdf"
      className="w-screen h-screen"
      data={pdfSelector[params["fileName"]]}
      type="application/pdf"
    />
  )
}

export default PDFPreviewPage

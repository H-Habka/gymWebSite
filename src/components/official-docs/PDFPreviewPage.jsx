import React from "react"
import { useParams } from "react-router-dom"

const pdfSelector = {
  AlBaselCertificate:
    "https://drive.google.com/file/d/1kwfVORkNbxip_Q7YhUDz9nTuPa8XUdVW/preview",
  BasicTrainingAndSecurityAwareness:
    "https://drive.google.com/file/d/1lidW7HhSP2yiFE6swT1mzGpQVu8AsCcQ/preview",
  BasicTrainingAndSecurityAwareness2:
    "https://drive.google.com/file/d/1Vx1Hv458iQW42jw0-DThPnfXrxU45oCc/preview",
  CertificateOfAppreciationFromTheEngineersSyndicate:
    "https://drive.google.com/file/d/1gnjsM670CmayibnGNFwOlCAHBS9FwPJt/preview",
  CertificateOfTheDiplomaOfGeneralSecondaryStudies:
    "https://drive.google.com/file/d/11-9FR1myPIPntE7B4McSYy51NWALvp8X/preview",
  GradesSheet:
    "https://drive.google.com/file/d/1vgnVZiasbHIYlB3yI79MpsCZjiqLz4rx/preview",
  LanguageExamForMasterDegree:
    "https://drive.google.com/file/d/1EltVytaiHfkYDhTMHxejXtfvPKpFMAXc/preview",
  MarineEngineeringGraduationDocument:
    "https://drive.google.com/file/d/1zRE8FC9RrCGgEpBxuY0ZlNwoOQMBO4qj/preview",
  MaritimeMedicalCertificate:
    "https://drive.google.com/file/d/1DPLYXWww5LBa3dpSEJP9uXrtGedMnfm7/preview",
  MasterLanguageExam:
    "https://drive.google.com/file/d/1QNOWBPlcVM0Y9dxOMdMNK_XTD7W0z6Q6/preview",
  CertificateOfExperience:
    "https://drive.google.com/file/d/1MMG3p2ZVzddSonjtLwgLChMvUEE_0W-2/preview",
  MyCV: "https://drive.google.com/file/d/1uMMKBpQaG-XRuLswTqkegPWuo6ngfnOR/preview",
}

const PDFPrepreviewPage = () => {
  const params = useParams()
  return (
    <iframe
      src={pdfSelector[params["fileName"]]}
      width="100%"
      allow="autoplay"
      className="h-screen "
      title="pdf prepreview"
    />
  )
}

export default PDFPrepreviewPage

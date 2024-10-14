import React, { lazy } from "react"
import { useParams } from "react-router-dom"
const Dockwise = lazy(() => import("./projects/dockwise"))
const DryDock = lazy(() => import("./projects/dryDock"))
const WorkSection = lazy(() => import("../WorkSection/index"))
const GetInTouchSection = lazy(() => import("../GetInTouchSection"))

const projects = {
  dockwise: Dockwise,
  dryDock: DryDock,
}

const ProjectPage = () => {
  const params = useParams()
  const projectName = params["projectName"]
  const ProjectToRender = projects[projectName]

  return (
    <div className="bg-[#121212AA]">
      {ProjectToRender && <ProjectToRender />}

      <div className="mt-[300px]">
        <WorkSection cardToHide={projectName} title="MORE WORK" />
        <GetInTouchSection hideSocialMedia />
      </div>
    </div>
  )
}

export default ProjectPage

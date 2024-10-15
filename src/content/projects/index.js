import { docwiseDetails } from "./dockwise"
import { dryDockDetails } from "./dryDock"

export const projectsData = {
  [docwiseDetails.name]: docwiseDetails,
  [dryDockDetails.name]: dryDockDetails,
}

export const projectsDataAsArray = Object.values(projectsData)

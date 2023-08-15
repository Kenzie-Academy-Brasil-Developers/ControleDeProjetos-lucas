import { uniqueEmail } from "./uniqueEmail.middlewares";
import handleError from "./handleError.middlewares"
import { userIdExists } from "./devIdExists.middlewares";
import { devExists } from "./devExists.middlewares";
import { validateOSProject } from "./validateOs.middlewares";
import { ProjectIdExists } from "./projectsIdExists.middlewares";
import { validateProjectIdDeveloper } from "./projectsDeveloperId.middlewares";



export default{uniqueEmail,handleError,userIdExists,devExists,validateOSProject,ProjectIdExists,validateProjectIdDeveloper,};
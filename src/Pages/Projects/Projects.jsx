import './Projects.css'
import SpecificProject from './SpecificProject/SpecificProject';
import { data as app2u } from './Data/App2U';
import {data as confrence} from './Data/Confrence';

function Projects() {
    return (
        <div id="projects-main">
            <SpecificProject data={app2u}/>
            <SpecificProject data={confrence}/>
        </div>
    )
}
export default Projects;
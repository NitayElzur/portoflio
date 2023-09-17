import './Projects.css'
import SpecificProject from './SpecificProject/SpecificProject';
import { data as app2u } from './Data/App2U';
import {data as confrence} from './Data/Confrence';
import {data as nahal} from './Data/AmoutatHaNahal';

function Projects() {
    return (
        <div id="projects-main">
            <SpecificProject data={app2u}/>
            <SpecificProject data={nahal}/>
            <SpecificProject data={confrence}/>
        </div>
    )
}
export default Projects;
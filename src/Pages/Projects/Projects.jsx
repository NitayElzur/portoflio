import './Projects.css'

function Projects() {
    return (
        <div id="projects-main">
            <div className="project">
                <div className="title">App2U</div>
                <div className="subtitle">A real time song choosing and playing web-app that saves your playlists and gives you statistics about your customers</div>
                <div className='devider'>
                    <div className="left-side">
                        <div className="role">Backend developer and library integretor</div>
                        <div className="role-desc">Incharge of most of the backend functions such as fetching data from youtube and pushing it to the specific establishment into the correct date</div>
                        <div className="tech-title">Technologies:</div>
                        <div className="tech-desc">React, React Player, MongoDB, Youtube API</div>
                        <div className="links">

                        </div>
                        <div className="page-specific"></div>
                    </div>
                    <div className="video">
                        <video autoPlay muted>
                            <source src={'../../../src/assets/App2U.webm'}/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;
import { Link } from 'react-router-dom';


function SpecificProject({ data }) {
    const {
        title,
        subtitle,
        role,
        role_desc,
        tech_stack,
        links,
        page_route,
        video
    } = data;

    return (
        <div className="project">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <div className='devider'>
                <div className="left-side">
                    <div className="role">{role}</div>
                    <div className="role-desc">{role_desc}</div>
                    <div className="tech-title">Technologies:</div>
                    <div className="tech-desc">
                        {
                            tech_stack.map((value, index) => {
                                return index + 1 !== tech_stack.length ? value + ', ' : value;
                            })
                        }
                    </div>
                    <div className="links-title">Links:</div>
                    <div className="links">
                        {
                            Object.entries(links).map((value, index) => {
                                return (
                                    <a href={value[1]} target="_blank" rel="noopener noreferrer">
                                        {index + 1 !== Object.values(links).length ? value[0] + ', ' : value[0]}
                                    </a>
                                )
                            })
                        }
                    </div>
                    {/* <Link to={page_route} className='specific-page'>Click to see more about {title}</Link> */}
                </div>
                <div className="video">
                    <video autoPlay muted loop>
                        <source src={video} type='video/webm' about='Video' />
                        <div style={{ textAlign: 'center' }}>Video is loading</div>
                    </video>
                </div>
            </div>
        </div>
    )
}
export default SpecificProject;
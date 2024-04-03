import {NavLink} from 'react-router-dom'
import 'devicon'
import DrawioSvg from '../images/about/drawio.svg'
import { IconCodeDots, IconStack3, IconListCheck, IconCalendarClock, IconGitFork} from '@tabler/icons-react'


export default function About(){

    return (

        <>   

            <div className="col-md-8">   

                <h2 className="mt-3 mt-md-4">About Me</h2>

                <p className="fs-5">Hi, I'm Scott &#128075;</p>  

                <p className="fs-5">I'm a junior web and software developer, who focusses on making functional and attractive products for desktop and web users.</p>  

                <p className="fs-5">I recently graduated from the University of the Sunshine Coast with a Bachelor of ICT - and am keen to practice using the skills and concepts I covered during my studies.</p>

                <p className="fs-5">My current goal is to finish off a handful of tools I think will make it easier for people to work on their creative projects - including tools to assist with writing, concept development and productivity. I also work on some small video games from time to time.</p>

                <p className="fs-5">Please feel free to check out what I've been working on on my <NavLink to="/">portfolio</NavLink>.</p>

                <hr className="col-3 col-md-2 my-4 my-md-5"/>    

            </div>

            <h2 className="mt-3 mt-md-4">My Proficiencies</h2>

            <p className="fs-5">I have a range of experience using the following programs, programming languages and concepts.</p>

            <h3 className="mt-3 mt-md-4">Programs</h3>

            <ul className="list-unstyled fs-5">

                <li className="d-md-inline me-md-5">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">Visual Studio Code</span>
                    
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">MongoDB</span>
                
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">Android Studio</span>
                    
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">Photoshop</span>

                </li>

                <li className="d-md-inline me-md-5">
                    
                    <img src={DrawioSvg} className="me-1 dev-icon"/>
                    <span className="align-middle">Draw.io</span>
                    
                </li>

            </ul>

            <h3 className="mt-3 mt-md-4">Languages</h3>

            <ul className="list-unstyled fs-5">

                <li className="d-md-inline me-md-5">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">Javascript</span>
                                                
                </li>

                <li className="d-md-inline me-md-5">

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">React</span>
                    
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">Java</span>
                    
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">Python</span>
                    
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="me-1 dev-icon"/>
                    <span className="align-middle">C#</span>
                    
                </li>

            </ul>

            <h3 className="mt-3 mt-md-4">Concepts</h3>

            <ul className="list-unstyled fs-5 mb-0">

                <li className="d-md-inline me-md-5">
                    
                    <IconStack3 className="me-1 dev-icon"/>
                    <span className="align-middle">Full-stack development</span>
                    
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <IconCodeDots className="me-1 dev-icon"/>
                    <span className="align-middle">Object-oriented programming</span>
                    
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <IconListCheck className="me-1 dev-icon"/>
                    <span className="align-middle">Test-driven development</span>
                    
                </li>

            </ul>

            <ul className="list-unstyled fs-5">

                <li className="d-md-inline me-md-5">
                    
                    <IconCalendarClock className="me-1 dev-icon"/>
                    <span className="align-middle">Project management</span>
                    
                </li>

                <li className="d-md-inline me-md-5">
                    
                    <IconGitFork className="me-1 dev-icon"/>
                    <span className="align-middle">Version control</span>
                    
                </li>

            </ul>

            <hr className="col-3 col-md-2 my-4 my-md-5"/>  
            
            <p className="fs-5">Please take a look at my <NavLink to="/resume">resume</NavLink> for a deeper look into my skills and experience.</p>        

        </>
        
    )

}
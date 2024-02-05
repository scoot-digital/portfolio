import {NavLink} from 'react-router-dom'


export default function About(){

    return (

        <>        

            <h2 class="mt-3 mt-md-4">About Me</h2>

            <p className="fs-5 col-md-8">Hi, I'm Scott!</p>  

            <p className="fs-5 col-md-8">I'm a junior web and software developer, who focusses on making functional and attractive products for desktop and web users.</p>  

            <p className="fs-5 col-md-8">I recently graduated from the University of the Sunshine Coast with a Bachelor of ICT - and am keen to practice using the skills and concepts I covered during my studies.</p>

            <p className="fs-5 col-md-8">My current goal is to finish off a handful of tools I think will make it easier for people to work on their creative projects - including tools to assist with writing, concept development and productivity. I also work on some small video games from time to time. Please feel free to check out what I've been working on on my <NavLink to="/">portfolio</NavLink>.</p>

            <hr className="col-3 col-md-2 my-4 my-md-5"/>    

            <h2 class="mt-3 mt-md-4">My Proficiencies</h2>

            <p className="fs-5 col-md-8">I have a range of experience using the following programs, programming languages and concepts.</p>

            <h3 class="mt-3 mt-md-4">Programs</h3>

            <ul class="list-unstyled">
                <li class="d-md-inline me-md-5">Visual Studio Code</li>
                <li class="d-md-inline me-md-5">MongoDB</li>
                <li class="d-md-inline me-md-5">Android Studio</li>
                <li class="d-md-inline me-md-5">Android Studio</li>
                <li class="d-md-inline me-md-5">Draw.io</li>
            </ul>

            <h3 class="mt-3 mt-md-4">Languages</h3>

            <ul class="list-unstyled">
                <li class="d-md-inline me-md-5">Javascript</li>
                <li class="d-md-inline me-md-5">JSON</li>
                <li class="d-md-inline me-md-5">Java</li>
                <li class="d-md-inline me-md-5">Python</li>
                <li class="d-md-inline me-md-5">C#</li>
            </ul>

            <h3 class="mt-3 mt-md-4">Concepts</h3>

            <ul class="list-unstyled">
                <li class="d-md-inline me-md-5">Something</li>
                <li class="d-md-inline me-md-5">MongoDB</li>
                <li class="d-md-inline me-md-5">Android Studio</li>
                <li class="d-md-inline me-md-5">Android Studio</li>
                <li class="d-md-inline me-md-5">Version Control</li>
            </ul>



            
            <p className="fs-5 col-md-8">Please take a look at my <NavLink to="/resume">resume</NavLink> for a deeper look into my skills and experience.</p>        

        </>
        
    )

}
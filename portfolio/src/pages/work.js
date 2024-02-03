import {NavLink} from 'react-router-dom'
import { useState, useEffect, useRef} from "react"

export default function Work(){

    //  Initialise array to hold projects elements necessary to create portfolio items
    const [projects, setProjects] = useState([])
    
    //  Initialise reference to project to show when user clicks one
    const [project, setProject] = useState()

    //  Get external data on page load
    useEffect(() => {

        fetch("https://api.github.com/users/scoot-digital/repos")
            .then((response) => response.json())
            .then((data) => {

                setProjects([...data])

            })

    }, [])

    //  Initialise arrays to hold list of project tags and active project tags
    const [projectTags, setProjectTags] = useState([])
    const [activeTags, setActiveTags] = useState([])

    //  Add each unique tag to array initialised above
    projects.forEach((project) => {   

        project.topics.forEach((topic) => { 

            if (!projectTags.includes(topic)) {

                // Use a temporary variable to store the new array
                const newProjectTags = [...projectTags, topic]
                
                // Update the state with the new array
                setProjectTags(newProjectTags)
            
            }
            
        })

    })

    //  Create page elements for tags
    const tagElements = projectTags.map((tag, index) => (      

        //  Create tag elements for filter     
        <a 

            href="#"
            className={`btn btn-light border border-secondary-subtle fs-6}`}
            onClick={() => showProjects({tag}.tag)} 
            key={tag}
            data-bs-toggle="button"
            aria-pressed="false"          
            autoComplete="off"
            id={tag + "-link"}
                        
        >
                
            {tag}

        </a>  

    ))

    //  Create page elements for projects
    const projectElements = projects.map((item) => { 
                    
        //  Format the pushed_at date
        const pushedDate = new Date(item.pushed_at)
        const month = pushedDate.toLocaleString('en-US', { month: 'short' })
        const year = pushedDate.getFullYear()
        const formattedDate = `${month} ${year}`

        //  Create portfolio items
        return(

            <div className="col fade show" id={item.name + "-container"} key={item.name}>

                <div className="card shadow-sm">                                
                    
                    <div className="card-img-top" title={item.name} style={
                        {
                            backgroundImage:"url('https://avatars.githubusercontent.com/u/95365647')",
                            height:12 + "rem",
                            backgroundSize:"cover",
                            backgroundPosition:"center"
                        }
                        }/>

                    <div className="card-body">

                        <p className="fs-5">{item.name}</p>

                        <p className="card-text">{item.description}</p>    

                        <div className="mb-3" id={item.name + "-tags"}>                                   

                            {item.topics.map((topic) => {

                                return (

                                    <span className="badge bg-dark-subtle text-dark-emphasis me-2" key={item.name + "-" + topic}>{topic}</span>

                                )

                            })}       

                        </div>                              
                        
                        <small className="text-body-secondary">{formattedDate}</small>                          

                    </div>
            

                </div>

            </div>

        )

    })  

    const showProjects = (_clickedTag) =>{        

        // Clone the activeTags array
        let updatedActiveTags = [...activeTags]

        //  -----   Handle active tags  -----
        
        // If "all" is clicked, clear the active tags array
        if (_clickedTag === "all") {

            updatedActiveTags.length = 0

        //  Otherwise, add / remove the clicked tag to the array keeping track of active tags as neccessary

        } else {

            const tagIndex = updatedActiveTags.indexOf(_clickedTag)

            if (tagIndex !== -1) {

                updatedActiveTags.splice(tagIndex, 1)

            } else {

                updatedActiveTags.push(_clickedTag)

            }      

        }       

        setActiveTags(updatedActiveTags) 
        
        // -----    Handle visibility of projects   -----

        projectElements.forEach((project) => {

            const projectContainer = document.querySelector(`#${project.key}-container`)
            const projectTagContainer = document.querySelector(`#${project.key}-tags`)

            projectContainer.classList.remove("show")
            projectContainer.classList.add("hidden")

            setTimeout(() => {
                
                projectContainer.classList.add("d-none")

            }, 250)     
        
            // Check if the project contains every active tag
            const showProject = updatedActiveTags.every((tag) =>

                projectTagContainer.textContent.includes(tag)

            )
        
            // Show the project if "all" is clicked or the project contains every active tag
            if (_clickedTag === "all" || showProject) {     

                setTimeout(() => {

                    projectContainer.classList.remove("hidden", "d-none")
                    projectContainer.classList.add("show")

                }, 250)

            }

        })     
        
        //  -----   Handle tag link appearance  -----   //

        const allProjectsToggle = document.querySelector("#all-projects-toggle")

        //  If active tags list is empty
        if(activeTags.length === 0){

            // Toggle the "all projects" link
            if(allProjectsToggle){
       
                //allProjectsToggle.setAttribute("aria-pressed", "true")
                allProjectsToggle.classList.add("active")

            }
      
            // Toggle off all tag links
            tagElements.forEach(tagElement => {   
                
                const tagLink = document.querySelector(`#${tagElement.key}-link`)

                tagLink.setAttribute("aria-pressed", "false")                    
                tagLink.classList.remove("active")     

            })

        } else {

            // Toggle the "all projects" link
            if(allProjectsToggle){

                allProjectsToggle.setAttribute("aria-pressed", "false")
                allProjectsToggle.classList.remove("active")

            }

            // Toggle on the tag links that match activeTags
            tagElements.forEach((tagElement, index) => {

                const tagLink = document.querySelector(`#${tagElement.key}-link`)

                if (activeTags.includes(projectTags[index])) {

                    console.log(tagLink);

                    tagLink.setAttribute("aria-pressed", "true")
                    tagLink.classList.add("active")

                }

            })

        }                   
          
    }    

    //  Show page elements
    return (

        <>

            <p className="mt-3 mt-md-4 fs-5 col-md-8"><span className = "h2">Hi there,</span> Welcome to my portfolio!</p>  

            <p className="fs-5 col-md-8">I'm a junior web and software developer, who focusses on making functional and attractive products for desktop and web users.</p>  

            <p className="fs-5 col-md-8">I recently graduated from the University of the Sunshine Coast with a Bachelor of ICT.</p>  

            <p className="fs-5 col-md-8">Feel free to read more <NavLink to="/about">here</NavLink>, or check out my work below.</p>  

            <hr className="col-3 col-md-2 my-4 my-md-5"/>  

            <div className="mb-4 mb-md-5 d-flex flex-wrap align-items-center gap-2">     

                <span className="fs-5 fw-semibold">Filters: </span>

                <a 

                    href="#"
                    className="btn btn-light border border-secondary-subtle fs-6 active" 
                    onClick={() => showProjects('all') }
                    data-bs-toggle="button"
                    aria-pressed="true"
                    autoComplete="off"
                    id="all-projects-toggle"

                    >
                        
                    all projects

                </a>
                
                {tagElements}

            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">  

                {projectElements}

            </div>   

        </>
        
    )   

}
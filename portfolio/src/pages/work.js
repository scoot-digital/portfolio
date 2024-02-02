import {NavLink} from 'react-router-dom'
import { useState, useEffect} from "react"

export default function Work(){

    //  Initialise array to hold projects elements necessary to create portfolio items
    const [projects, setProjects] = useState([])
    
    //  Initialise reference to project to show when user clicks one
    const [project, setProject] = useState()

    useEffect(() => {

        fetch("https://api.github.com/users/scoot-digital/repos")
            .then((response) => response.json())
            .then((data) => {

                setProjects([...data])

            })

    }, [])

    //  Initialise array to hold list of tags
    let projectTags = []

    return (

        <>

            <p className="mt-3 mt-md-4 fs-5 col-md-8"><span className = "h2">Hi there!</span> Welcome to my portfolio!</p>  

            <p className="fs-5 col-md-8">I'm a junior web and software developer, who focusses on making functional and attractive products for desktop and web users.</p>  

            <p className="fs-5 col-md-8">I recently graduated from the University of the Sunshine Coast with a Bachelor of ICT.</p>  

            <p className="fs-5 col-md-8">Feel free to read more <NavLink to="/about">here</NavLink>, or check out my work below.</p>  

            <hr className="col-3 col-md-2 my-4 my-md-5"/>  

            <div className="mb-4 mb-md-5 d-flex flex-wrap align-items-center gap-2">     

                <span class="fs-5 fw-semibold">Filters: </span>

                <span className="btn p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle me-2 mb-2 mb-md-0 fs-6 fw-normal">all projects</span>
                
                {projects.map((item) => {   

                    //  Add each unique tag to array initialised above
                    item.topics.forEach((topic) => {

                        projectTags.indexOf(topic) === -1
                            ? projectTags.push(topic)
                            : console.log("This item already exists")
                        
                    })

                    return(

                        console.log(`Got tags for project ${item.name}`)
                    )

                })}

                {projectTags.map((tag) => {                   

                    //  Create tag elements for filter
                    return(                                               

                        <span className="btn p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle me-2 mb-2 mb-md-0 fs-6 fw-normal" key={tag}>{tag}</span>
                        
                    )

                })}

            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">  

                {projects.map((item) => { 
                    
                    //  Format the pushed_at date
                    const pushedDate = new Date(item.pushed_at)
                    const month = pushedDate.toLocaleString('en-US', { month: 'short' })
                    const year = pushedDate.getFullYear()
                    const formattedDate = `${month} ${year}`

                    //  Create portfolio items
                    return(

                        <div className="col" key={item.id}>

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

                                    <div className="mb-3">                                   

                                        {item.topics.map((topic) => {

                                            return (

                                                <span className="badge bg-dark-subtle text-dark-emphasis me-2" key={topic}>{topic}</span>

                                            )

                                        })}       

                                    </div>                              
                                    
                                    <small className="text-body-secondary">{formattedDate}</small>                          

                                </div>
                        

                            </div>

                        </div>

                    )

                })}    

            </div>   

        </>
        
    )

}
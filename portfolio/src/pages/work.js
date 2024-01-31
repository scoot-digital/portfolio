import {NavLink} from 'react-router-dom'

function Work(){

    return (

        <div className="container-md py-md-5">

            <main>            

                <p className="fs-5 col-md-8"><span class = "h2">Hi there!</span> Welcome to my portfolio!</p>  

                <p className="fs-5 col-md-8">I'm a junior web and software developer, who focusses on making functional and attractive products for desktop and web users.</p>  

                <p className="fs-5 col-md-8">I recently graduated from the University of the Sunshine Coast with a Bachelor of ICT.</p>  

                <p className="fs-5 col-md-8">Feel free to read more <NavLink to="/about">here</NavLink>, or check out my work <a href="#" id="scroll-down">below</a>.</p>  

                <hr className="col-3 col-md-2 mb-5"/>

            </main>

        </div>
        
    )

}

export default Work
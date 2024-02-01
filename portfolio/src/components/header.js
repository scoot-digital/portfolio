import {NavLink} from 'react-router-dom'

const navigation = [

    {name: "Work", href: "/"},
    {name: "About", href: "/about"},
    {name: "Resume", href: "/resume"},
    {name: "Contact", href: "/contact"},

]

function Header(props){

    return (

        <>

            <nav className="navbar navbar-light navbar-expand-md py-2 bg-light border-bottom">
                        
                <div className = "container-md desktop-align-bottom">
                    
                    <span className="navbar-brand fs-1 text-decoration-none py-0">

                        Scott Green
                    
                    </span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-contents" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <span className="navbar-toggler-icon"></span>
                    
                    </button>
            
                    <div className="collapse navbar-collapse" id = "navbar-contents">

                        <ul className="navbar-nav me-auto">

                            {navigation.map((item) => (

                                <li key={item.name} className="nav-item fs-5">

                                    <NavLink 
                                       
                                        to={item.href}
                                        className={({isActive}) => {
                                            
                                            return "nav-link py-0 " +
                                            (isActive ? "active": "")

                                        }}

                                    > 

                                        {item.name} 

                                    </NavLink>

                                </li>                             

                            ))}

                        </ul>
                        
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">

                            <li className="nav-item fs-4">

                                <a className="nav-link" id="dark-mode" href="#"><i className="bi bi-moon-stars"></i></a>

                            </li>

                        </ul>
                    
                    </div>

                </div>     

            </nav>  

            <main>

                <div className="container-md pt-3">    

                    {props.children}

                </div>

            </main>

        </>

    )

}

export default Header
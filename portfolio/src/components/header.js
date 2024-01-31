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
                        
                <div className = "container-md">
                    
                    <span className="navbar-brand d-flex align-items-center text-decoration-none">

                        Scott Green
                    
                    </span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-contents" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <span className="navbar-toggler-icon"></span>
                    
                    </button>
            
                    <div className="collapse navbar-collapse" id = "navbar-contents">

                        <ul className="nav nav-underline">

                            {navigation.map((item) => (

                                <li className="nav-item mt-2">

                                    <NavLink 

                                        key={item.name}
                                        to={item.href}
                                        className={({isActive}) => {
                                            
                                            return "nav-link " +
                                            (isActive ? "active": "")

                                        }}


                                    > 

                                        {item.name} 

                                    </NavLink>

                                </li>                             

                            ))}

                        </ul>
                        
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">

                            <li className="nav-item">

                                <a className="nav-link" id="dark-mode" href="#"><i className="bi bi-moon-stars"></i></a>

                            </li>

                        </ul>
                    
                    </div>

                </div>     

            </nav>  

            {props.children}

        </>

    )

}

export default Header
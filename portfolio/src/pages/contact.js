import { IconMail } from '@tabler/icons-react'

export default function Contact(){

    return (

        <div className="col-md-8">

            {/* modal here */}              

            <h2 className="mt-3 mt-md-4">Contact Me</h2>

            <p className="fs-5">Please feel free to get in touch if you feel I would be a good fit for your upcoming project.</p>  

            <p className="fs-5"><span className="d-flex align-items-center">You can use the contact form on this page, or send me an <IconMail className="mx-1 dev-icon"/><button type="button" className="btn btn-link me-1">email</button> directly.</span></p>  

            <hr className="col-3 col-md-2 my-4 my-md-5"/>         

            <div className="bg-white border rounded shadow-sm p-3 p-md-5">    

                
        
            </div>
        
        </div>
        
    )

}
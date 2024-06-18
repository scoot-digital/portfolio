import { IconMail } from '@tabler/icons-react'

export default function Contact(){

    return (

        <>

            <div className="col-xl-8">

                {/* modal here */}              

                <h2 className="mt-3 mt-md-4">Contact Me</h2>

                <p className="fs-5">Please feel free to get in touch if you feel I would be a good fit for your upcoming project.</p>  

                <p className="fs-5">You can use the contact form on this page, or send me an <IconMail className="me-1 align-text-bottom"/><button type="button" className="btn btn-link align-baseline">email</button> directly.</p>  

                <hr className="col-3 col-md-2 my-4 my-md-5"/>   

            </div>              

            <div className="bg-white border rounded shadow-sm p-3 p-md-5 col-xl-8 order-2">    

                
        
            </div>
    
        </>
        
    )

}
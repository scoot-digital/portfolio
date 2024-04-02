import { IconMail } from '@tabler/icons-react'
import { useState } from 'react'
import EmailForm from '../components/forms/downloadForm.js'

export default function Contact(){

    const [captchaValue, setCaptchaValue] = useState(null)

    return (

        <div className="col-md-8">

            <div className="modal" id="email-modal" tabIndex="-1" aria-hidden="true">

                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content">  

                        <EmailForm/>

                    </div>

                </div>

            </div>                     

            <h2 className="mt-3 mt-md-4">Contact Me</h2>

            <p className="fs-5">Please feel free to get in touch if you feel I would be a good fit for your upcoming project.</p>  

            <p className="fs-5">You can use the contact form on this page, or send me an <IconMail className="me-1 dev-icon"/><a href="#" data-bs-toggle="modal" data-bs-target="#email-modal">email</a> directly.</p>  

            <hr className="col-3 col-md-2 my-4 my-md-5"/>         

            <div className="bg-white border rounded shadow-sm p-3 p-md-5">    

                
        
            </div>
        
        </div>
        
    )

}
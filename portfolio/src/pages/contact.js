import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact(){

    const [captchaValue, setCaptchaValue] = useState(null)

    return (

        <div className="col-md-8">                      

            <h2 class="mt-3 mt-md-4">Contact Me</h2>

            <p className="fs-5">Please feel free to get in touch if you feel I would be a good fit for your upcoming project.</p>  

            <p className="fs-5">You can use the contact form on this page, or send me an email directly <a href = "hello@philippeneveu.com" >here</a>.</p>  

            <hr className="col-3 col-md-2 my-4 my-md-5"/>         

              <div class="bg-white border rounded shadow-sm p-3 p-md-5">    

                <form>           

                    <label for="name-input" class="col-sm-2 col-form-label">Name</label>                
                    <input type="text" class="form-control" id="name-input"/>
                
                    <label for="email-input" class="col-sm-2 col-form-label">Email</label>
                    <input type="email" class="form-control" id="email-input"/>    

                    <label for="enquiry-input" class="col-sm-2 col-form-label">Your Message</label>
                    <textarea class="form-control" id="enquiry-input"/>    

                    <div class="g-recaptcha" data-></div>    

                    <ReCAPTCHA class="mt-3 mt-md-4"
                    
                        sitekey="6Lct4mYpAAAAAKmG46pALJxoRmyRbe_mwI9jMHHe"
                        onChange={(val) => setCaptchaValue(val)}
                    
                    />         

                    <button type="submit" class="btn btn-primary mt-3">Send</button>

                </form>
            
            </div>
        
        </div>
        
    )

}
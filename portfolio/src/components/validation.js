import ReCAPTCHA from 'react-google-recaptcha'

//  Reset form validation components
export const ValidationReset = (props) => {

    console.log("trying to reset captcha")

    //  Reset recaptcha
    if (props.recaptchaRef.current) {

        props.recaptchaRef.current.reset()

    }

}


//  Form components for validation
export const ValidationFormElements = (props) => {

    return (

        <>

            <ReCAPTCHA
                            
                className="mt-3 mt-md-4"
                ref={props.recaptchaRef}
                sitekey="6Lct4mYpAAAAAKmG46pALJxoRmyRbe_mwI9jMHHe"
                onChange={(e) => props.setField("robot", "passed")}
            
            />    

            <div className="invalid-feedback d-block">

                {props.errors.robot}

            </div>

        </>

    )

}
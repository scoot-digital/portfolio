import React, { forwardRef, useImperativeHandle } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


export const FormValidation = forwardRef( (props, ref) => {

    //  Make functionality available to parent component
    useImperativeHandle(ref, () => {

        return {

            resetValidation: resetValidation

        }

    })

    // Function to reset validation form element
    const resetValidation = () => {
        
        if (props.recaptchaRef.current) {
            props.recaptchaRef.current.reset()
        }

    }

    //  Form element for validation
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

})
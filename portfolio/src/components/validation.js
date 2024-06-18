import React, { forwardRef, useImperativeHandle } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


export const FormValidation = forwardRef( ({recaptchaRef, setField, errors}, ref) => {

    //  Make functionality available to parent component
    useImperativeHandle(ref, () => ({

        resetValidation

    }));

    // Function to reset validation form element
    const resetValidation = () => {

        if (recaptchaRef.current) {

            recaptchaRef.current.reset();

        }

    }

    //  Form element for validation
    return (

        <>

            <ReCAPTCHA
                            
                className="mt-3 mt-md-4"
                ref={recaptchaRef}
                sitekey="6Lct4mYpAAAAAKmG46pALJxoRmyRbe_mwI9jMHHe"
                onChange={() => setField("robot", "passed")}
            
            />    

            <div className="invalid-feedback d-block">

                {errors.robot}

            </div>

        </>

    )

})
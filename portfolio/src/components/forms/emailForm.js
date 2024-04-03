import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import resumeDoc from '../../files/Scott_Green_Resume.docx'
import resumePDF from '../../files/Scott_Green_Resume.pdf'
import { FormValidation } from '../validation.js'

export default function EmailForm(props) {

    return (

        <>

            <p>Please complete the following validation to open a new email addressed to me:</p>

            <FormValidation 
                ref = {props.ValidationRef}
                recaptchaRef = {props.recaptchaRef} 
                setField = {props.setField} 
                errors = {props.errors} 
            />

        </>     
        
    )

}
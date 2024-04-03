import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import resumeDoc from '../../files/Scott_Green_Resume.docx'
import resumePDF from '../../files/Scott_Green_Resume.pdf'
import { FormValidation } from '../validation.js'

export default function DownloadResumeForm(props) {

    return (

        <>

            <p>Download as:</p>

            <Form.Group>

                <Form.Check

                    className={!!props.errors.fileType && ".form-check-input:invalid"}
                    type="radio"
                    name="radio-filetype"
                    id={`radio-word`}
                    label={`Word Document`}
                    value="docx"
                    onChange={(e) => props.setField('fileType', e.target.value)}
                    isInvalid={!!props.errors.fileType}

                />

                <Form.Check

                    className={!!props.errors.fileType && ".form-check-input:invalid"}
                    type="radio"
                    name="radio-filetype"
                    id={`radio-pdf`}
                    label={`PDF Document`}
                    value="pdf"
                    onChange={(e) => props.setField('fileType', e.target.value)}
                    isInvalid={!!props.errors.fileType}

                />     

                <div className="invalid-feedback d-block">

                    {props.errors.fileType}

                </div>

            </Form.Group>

            <FormValidation 
                ref = {props.ValidationRef}
                recaptchaRef = {props.recaptchaRef} 
                setField = {props.setField} 
                errors = {props.errors} 
            />

        </>     
        
    )

}
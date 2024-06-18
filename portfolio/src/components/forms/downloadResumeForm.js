import { Form } from 'react-bootstrap'
import { FormValidation } from '../validation.js'

export default function DownloadResumeForm({ recaptchaRef, setField, errors }, ref) {

    return (

        <>

            <div className="fade show" id="form-content">

                <p>Download as:</p>

                <Form.Group>

                    <Form.Check

                        className={!!errors.fileType && ".form-check-input:invalid"}
                        type="radio"
                        name="radio-filetype"
                        id={`radio-word`}
                        label={`Word Document`}
                        value="docx"
                        onChange={(e) => setField('fileType', e.target.value)}
                        isInvalid={!!errors.fileType}

                    />

                    <Form.Check

                        className={!!errors.fileType && ".form-check-input:invalid"}
                        type="radio"
                        name="radio-filetype"
                        id={`radio-pdf`}
                        label={`PDF Document`}
                        value="pdf"
                        onChange={(e) => setField('fileType', e.target.value)}
                        isInvalid={!!errors.fileType}

                    />     

                    <div className="invalid-feedback d-block">

                        {errors.fileType}

                    </div>

                </Form.Group>

                <FormValidation
                
                    ref = {recaptchaRef}
                    setField = {setField}
                    errors = {errors}
                
                />

            </div>

            <div className="fade hidden d-none" id="form-confirmation">

                <p>Please check your downloads folder.</p>
                <p className = "mb-0">You may now close this pop-up.</p>

            </div>

        </>     
        
    )

}
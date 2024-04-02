import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import resumeDoc from '../../files/Scott_Green_Resume.docx'
import resumePDF from '../../files/Scott_Green_Resume.pdf'

export default function DownloadForm() {

    //  Initialise reference to recaptcha widget
    const recaptchaRef = useRef(null)

    //  Initialise variable to store data entered into the form
    const [form, setForm] = useState({})

    //  Initialise variable to store errors in the form
    const [errors, setErrors] = useState({})

    //  Retrieve and store form data
    const setField = (field, value) => {

        //  Add the new value to the field changed in the form object. (Add the field if doesn't already exist)
        setForm({

            ...form,
            [field]:value

        })

        //  Add any errors to the errors object
        if (!!errors[field])
        setErrors({
            
            ...errors,
            [field]:null

        })

    }

    const validateForm = () => {

        //  Get values from the form
        const {fileType, robot} = form

        //  Initialise object to store errors in the form
        const newErrors = {}

        //  Conditions for errors
        if (!fileType){

            newErrors.fileType = "Please select your preferred file type."

        }
        
        if (robot != "passed"){

            newErrors.robot= "Please confirm you are not a bot."
            
        }

        //  Return the errors object to the handleSubmit function
        return newErrors

    }

    const handleSubmit = e => {

        //  Prevent page refresh
        e.preventDefault()        

        //  Check if there are errors in the form
        const formErrors = validateForm()

        //  If there are errors in the form
        if (Object.keys(formErrors).length > 0){

            //  Display them on-screen
            setErrors(formErrors)

        //  If there are no errors in the form
        } else {

            console.log(form)

            //  Initialise references to elements to fade
            const formContainer = document.querySelector("#form-container")
            const formHeader = document.querySelector("#download-Modal-Label")
            const submitButton = document.querySelector("#submit-button")
            const formConfirmation = document.querySelector("#form-confirmation")

            //  Fade out required elements
            {[formHeader, formContainer, submitButton].map((element) => (

                element.classList.remove("show"),
                element.classList.add("hidden")
                
             ))}

            //  Change form header
            formHeader.innerText = "Download In Progress"

            //  Remove required elements from page
            setTimeout(() => {

                {[formContainer, submitButton].map((element) => (
                
                    element.classList.add("d-none")
                
                ))}

            }, 250)   

            //  -----   Download document required  -----

            const desiredFileType = form.fileType

            //  Create temporary link for file download
            const anchor = document.createElement("a")
            
            //  Apply required document to link
            if(desiredFileType === "docx"){

                anchor.href = resumeDoc

            } else if (desiredFileType === "pdf"){

                anchor.href = resumePDF

            }

            // Set the download attribute to specify the filename
            anchor.download = `Scott_Green_Resume.${desiredFileType}`

            //  Download the desired document
            document.body.appendChild(anchor)
            anchor.click()

            console.log(anchor);

            //  Remove the link from the page
            document.body.removeChild(anchor)


            //  Show required elements
            setTimeout(() => {

                //  Show header and confirmation
                {[formHeader, formConfirmation].map((element) => (

                    element.classList.remove("hidden", "d-none"),
                    element.classList.add("show")
                    
                ))}

            }, 250)

        }

    }

    const resetForm = e => {

        //  Initialise references to elements change visibility
        const formContainer = document.querySelector("#form-container")
        const formHeader = document.querySelector("#download-Modal-Label")
        const submitButton = document.querySelector("#submit-button")
        const formConfirmation = document.querySelector("#form-confirmation")

        //  Change form header
        formHeader.innerText = "Download Resume"

        //  Hide required elements
        {[formConfirmation].map((element) => (

            element.classList.remove("show"),
            element.classList.add("hidden", "d-none")
            
        ))}

        //  Show required elements
        {[formContainer, submitButton].map((element) => (

            element.classList.add("show"),
            element.classList.remove("hidden", "d-none")
            
        ))}

        //  Reset form page elements
        const downloadForm = document.querySelector("#download-form")
        downloadForm.reset()

        //  Reset recaptcha
        const recaptcha = document.querySelector("#recaptcha")
        if (recaptchaRef.current) {

            recaptchaRef.current.reset()

        }

        //  Reset form errors
        setErrors({})

        //  Reset form values
        setForm({})

    }

    return (

        <Form className="row m-0" id="download-form">

            <div className="modal-header">

                <h1 className="modal-title fs-5 mt-0" id="download-Modal-Label">Download Resume</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={resetForm}></button>

            </div>

            <div className="modal-body">

                <div className="fade show" id="form-container">

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

                    <ReCAPTCHA
                    
                        className="mt-3 mt-md-4"
                        ref={recaptchaRef}
                        sitekey="6Lct4mYpAAAAAKmG46pALJxoRmyRbe_mwI9jMHHe"
                        onChange={(e) => setField("robot", "passed")}
                    
                    />    

                    <div className="invalid-feedback d-block">

                        {errors.robot}

                    </div>

                </div>                        

                <div className="fade hidden d-none" id="form-confirmation">

                    <p>Please check your downloads folder.</p>
                    <p className = "mb-0">You may now close this form.</p>

                </div>

            </div>

            <div className="modal-footer">                
                
                <button type="submit" className="btn btn-primary fade show" id="submit-button" onClick={handleSubmit}>Download</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetForm}>Close</button>               

            </div>

        </Form>

    )

}
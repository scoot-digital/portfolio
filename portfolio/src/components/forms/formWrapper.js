//  Import required libraries
import { Form } from 'react-bootstrap'
import React, { useState, useRef, forwardRef, useImperativeHandle, cloneElement } from 'react'

//  Import form types and any files to be returned to user
import resumeDoc from '../../files/Scott_Green_Resume.docx'
import resumePDF from '../../files/Scott_Green_Resume.pdf'

export const FormWrapper = forwardRef(({ children }, ref) => {

    //  Initialise reference to recaptcha widget
    const recaptchaRef = useRef(null)

    //  Initialise variable to store data entered into the form
    const [form, setForm] = useState({})

    //  Initialise variable to store errors in the form
    const [errors, setErrors] = useState({})

    //  Declare reference to FormValidation component to be able to use its functions
    const ValidationRef = useRef() 

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
        
        if (robot !== "passed"){

            newErrors.robot= "Please confirm you are not a bot."
            
        }

        //  Return the errors object to the handleSubmit function
        return newErrors

    }

    const handleSubmit = e => {

        //  Prevent page refresh
        if (e) {

            e.preventDefault();

        }    

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
            const formContainer = document.querySelector("#form-content")
            const submitButton = document.querySelector("#submit-button")
            const formConfirmation = document.querySelector("#form-confirmation")

            //  Fade out required elements
            if (formContainer && submitButton) {

                [formContainer, submitButton].forEach(element => {

                    element.classList.remove("show")
                    element.classList.add("hidden")

                })

            }

            //  Remove required elements from page
            setTimeout(() => {

                if (formContainer && submitButton) {

                    [formContainer, submitButton].forEach(element => {

                        element.classList.add("d-none")

                    })

                }

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
                if (formConfirmation) {

                    [formConfirmation].forEach(element => {

                        element.classList.remove("hidden", "d-none")
                        element.classList.add("show")

                    })

                }

            }, 250)

        }

    }

    const resetForm = () => {

        //  Initialise references to elements change visibility
        const formContainer = document.querySelector("#form-content")
        const submitButton = document.querySelector("#submit-button")
        const formConfirmation = document.querySelector("#form-confirmation")

        //  Hide required elements
        if (formConfirmation) {

            [formConfirmation].forEach(element => {

                element.classList.remove("show")
                element.classList.add("hidden", "d-none")

            })

        }

        //  Show required elements
        if (formContainer && submitButton) {

            [formContainer, submitButton].forEach(element => {

                element.classList.add("show")
                element.classList.remove("hidden", "d-none")

            })

        }

        //  Reset form page elements
        const downloadForm = document.querySelector("#form-container")

        if (downloadForm) {

            downloadForm.reset()

        }

        //  Reset recaptcha   
        ValidationRef.current?.resetValidation()

        //  Reset form errors
        setErrors({})

        //  Reset form values
        setForm({});

    }

    //  Make functionality available to parent component
    useImperativeHandle(ref, () => ({

        resetForm,
        handleSubmit

    }))

    //  Clone child component to add props
    const requiredForm = React.Children.map(children, child =>
    
        cloneElement(child, {recaptchaRef, setField, errors})

    )

    return (

        <Form className="row m-0" id="form-container">            

            {requiredForm}            

        </Form>

    )

})
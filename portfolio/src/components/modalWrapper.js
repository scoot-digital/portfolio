import Modal from 'react-bootstrap/Modal'
import React, { forwardRef, useImperativeHandle, useState, useRef } from 'react'

//  Modal type options
export const ModalType = Object.freeze({ 

    FORM: "form",
    ALERT: "alert"

});

export const ModalWrapper = forwardRef(({ children, _title, _type }, ref) => {  
    
    //  Initialise reference to formWrapper component to be passed to modalWrapper
    const formWrapperRef = useRef()

    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(prevShow => !prevShow)

    // Function to show/hide modal
    const toggleModal = (e) => {
        
        // Prevent default link behavior
        if (e){

            e.preventDefault()

        }

        //  Handle showing of the modal
        toggleShow()

        //  Clear form if one exists
        if(_type === ModalType.FORM && show === false)
        {
        
            formWrapperRef.current?.resetForm();
            console.log("reset form");

        }

    }

    //  Make functionality available to parent component
    useImperativeHandle(ref, () => ({
     
        toggleModal        

    }))

    // Access handleSubmit from formWrapper
    const handleSubmit = () => {

        formWrapperRef.current?.handleSubmit();

    }

    return (

        <Modal show={show} onHide={toggleModal}>

            <Modal.Header>

                {/* Add title to modal header */}
                <Modal.Title className="mt-0">{_title}</Modal.Title>

                {/* Close button for modal header */}
                <button type="button" className="btn-close" onClick={toggleModal}></button>

            </Modal.Header>

            <Modal.Body>
                
                {React.cloneElement(children, { ref: formWrapperRef })}

            </Modal.Body>

            <Modal.Footer>

                {/* Buttons for modal footer */}
                {_type === ModalType.FORM ? (

                    <>

                        <button type="button" className="btn btn-primary fade show" id="submit-button" onClick={handleSubmit}>Confirm</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleModal}>Close</button>   

                    </>

                ) : (

                    <>

                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleModal}>Close</button>   

                    </>
                )}   

            </Modal.Footer>

        </Modal>

    )

})
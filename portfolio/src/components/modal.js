import FormWrapper from './forms/formWrapper.js'

export default function Modal({modalType}) {

    return (

        <div className="modal" id={modalType + "-modal"} tabIndex="-1" aria-hidden="true">

            <div className="modal-dialog modal-dialog-centered">

                <div className="modal-content">  
                    
                    <FormWrapper formType = {modalType} />

                </div>

            </div>

        </div>

    )

}
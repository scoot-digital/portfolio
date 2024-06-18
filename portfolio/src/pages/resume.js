import { useRef } from 'react'
import { IconDownload } from '@tabler/icons-react'
import { ModalWrapper } from '../components/modalWrapper.js'
import { ModalType } from "../components/modalWrapper.js"
import { FormWrapper } from '../components/forms/formWrapper.js'
import DownloadResumeForm from '../components/forms/downloadResumeForm.js'

export default function Resume() {

    //  Initialise reference to modalWrapper component
    const modalWrapperRef = useRef(null)

    //  Initialise reference to formWrapper component to be passed to modalWrapper
    const formWrapperRef = useRef(null)

    return (

        <div className="col-xl-8">            

            <ModalWrapper

                _link = {document.querySelectorAll("#toggle-modal")}
                _type = {ModalType.FORM}
                _title = "Download Resume"   
                ref = {modalWrapperRef}

            >

                <FormWrapper ref = {formWrapperRef}>

                    <DownloadResumeForm/>

                </FormWrapper>                

            </ModalWrapper>

            <h2 className="mt-3 mt-md-4">My Resume</h2>

            <p className="fs-5">Please see below for an in-depth overview of my skills and experience.</p>

            <p className="fs-5">You can also <IconDownload className="me-1 align-text-bottom"/><button type="button" className="btn btn-link align-baseline" onClick={() => {modalWrapperRef.current?.toggleModal();}}>download</button> my resume as a Word document or PDF.</p>  

            <hr className="col-3 col-md-2 my-4 my-md-5"/>

            <h2>Skills &amp; Experience</h2>

            <h3>Work Related Experience and Transferable Skills</h3>
            
            <ul className="fs-5 list-items-spaced">

                <li>Cooperates with clients and customers to deliver desirable outcomes</li>
                <li>Understands tasks and efficiently completes work in order of priority</li>
                <li>Assists team mates to ensure business continuity</li>
                <li>Exceeds KPI targets and surpasses expectations</li>

            </ul>

            <h3>Technology</h3>

            <ul className="fs-5 list-items-spaced">

                <li>Produces web-based products using HTML, CSS and JavaScript</li>
                <li>Experience with MERN stack <span className="fs-6 muted fst-italic">(MongoDB, Express, React, Node)</span></li>
                <li>Builds desktop applications using Electron and Python</li>
                <li>Quickly grasps new programming languages, software and concepts</li>
                <li>Utilizes several computer applications 

                    <div>                  

                    <span className="fs-6">i.e., Visual Studio Code, Adobe Creative Suite, Digital Audio Workstations and Microsoft Office Suite</span>

                    </div>
                 
                </li>

                <li>Uses version control systems such as Git and Bitbucket</li>

            </ul>

            <h3>Responsbility</h3>

            <ul className="fs-5 list-items-spaced">

                <li>Completes assigned tasks on-time and stays within scope</li>
                <li>Has previously been entrusted with significant responsibilities 

                    <div>             

                        <span className="fs-6">i.e., holding a store key and setting up a department for store trading</span>

                    </div>
                    
                </li>

                <li>Arrives punctually and is always enthusiastic</li>
                <li>Dedicated to continuous learning and professional growth</li>

            </ul>

            <h3>Communication &amp; Interpersonal</h3>

            <ul className="fs-5 list-items-spaced">

                <li>Maintains positive working relationships with colleagues </li>
                <li>Is outgoing, supportive and receptive to new ideas</li>
                <li>Builds positive rapport with clients and strives to ensure repeat business</li>
                <li>Possesses strong verbal and written communication</li>

            </ul>
            
            <hr className="col-3 col-md-2 my-4 my-md-5"/>

            <h2>Employment History</h2>

            <ul className="fs-5">

                <li className="fw-semibold">Coles Supermarkets, Buderim</li>
                
                    <ul className="list-items-spaced-none">

                        <li>
                            Night-fill
                            <span className="float-lg-end d-block">Aug 2021 &ndash; Current</span>
                        </li>

                        <li>
                            Personal Shopper
                            <span className="float-lg-end d-block">Feb 2021 &ndash; Aug 2021</span>
                        </li>

                    </ul>

                <li className="fw-semibold mt-2">Nextra Swan Newsagency, Maroochydore</li>
                
                    <ul className="list-items-spaced-none">

                        <li>
                            Shop Attendant
                            <span className="float-lg-end d-block">Jul 2020 &ndash; Feb 2021</span>
                        </li>

                    </ul>

                <li className="fw-semibold mt-2">Hertz Australia, Mackay</li>
                
                    <ul className="list-items-spaced-none">

                        <li>
                            Customer Vehicle Representative
                            <span className="float-lg-end d-block">Jul 2019 &ndash; Jul 2020</span>
                        </li>

                    </ul>

                <li className="fw-semibold mt-2">Allianz Australia Insurance Limited</li>
                
                    <ul className="list-items-spaced-none">

                        <li>
                            Customer Service Specialist
                            <span className="float-lg-end d-block">Apr 2016 &ndash; Jun 2019</span>
                        </li>

                    </ul>

                <li className="fw-semibold mt-2">Nextra News & Megabooks, Toombul</li>
                
                    <ul className="list-items-spaced-none">

                        <li>
                            Shop Attendant
                            <span className="float-lg-end d-block">Jul 2015 &ndash; Apr 2016</span>
                        </li>

                    </ul>

            </ul>

            <hr className="col-3 col-md-2 my-4 my-md-5"/>

            <h2>Achievements &amp; Qualifications</h2>

            <ul className="fs-5 list-items-spaced">

                <li>
                    
                    <span className="fw-semibold">Bachelor of Information and Communications Technology</span>                    

                    <span className="muted fst-italic me-3 d-block d-lg-inline-block">Major in Web and Mobile Development</span> GPA 6.1                    
                    
                </li>

                <li>Delivered a presentation to 30+ education agents from South Asia on behalf of UniSC</li>

                <li>TAFE Queensland Micro-credentials:

                    <ul className="fs-6 list-items-spaced-none">

                        <li>Digital Literacy Essentials (MCC00013)</li>
                        <li>Cyber Security Essentials (MCC00014)</li>
                        <li>Communication Technologies for Business Success (MCC00015)</li>
                        <li>Digital Data Essentials (MCC00016)</li>
                        <li>Data Security Essentials (MCC00017)</li>
                        <li>Data Analysis Essentials (MCC00018)</li>

                    </ul>            

                </li>        

            </ul>

            <hr className="col-3 col-md-2 my-4 my-md-5"/>

            <h2>Professional References</h2>

            <p className="fs-5">Please <IconDownload className="me-1 align-text-bottom"/><button type="button" className="btn btn-link align-baseline" onClick={() => {modalWrapperRef.current?.toggleModal();}}>download</button> my resume to see my current professional references.</p>

        </div>
        
    )

}
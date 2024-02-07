import { IconDownload } from '@tabler/icons-react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import resumeDoc from '../files/Scott_Green_Resume.docx'
import resumePDF from '../files/Scott_Green_Resume.pdf'

export default function Resume(){



    const [captchaValue, setCaptchaValue] = useState(null)

    return (

        <div className="col-md-8">      

            <div class="modal fade" id="download-modal" tabindex="-1" aria-hidden="true">

                <div class="modal-dialog modal-dialog-centered">

                    <div class="modal-content">

                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="download-Modal-Label">Download Resume</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">

                            <p>Please select your preferred file type.</p>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio-word" />
                                <label class="form-check-label" for="radio-word">
                                    Word Document
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio-pdf" />
                                <label class="form-check-label" for="radio-pdf">
                                    PDF Document
                                </label>
                            </div>      
                        
                            <div class="g-recaptcha" data-></div>    

                            <ReCAPTCHA class="mt-3 mt-md-4"
                        
                                sitekey="6Lct4mYpAAAAAKmG46pALJxoRmyRbe_mwI9jMHHe"
                                onChange={(val) => setCaptchaValue(val)}
                            
                            /> 

                        </div>

                        <div class="modal-footer">
                            
                            <button type="button" class="btn btn-primary">Download</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>

                    </div>

                </div>

            </div>


            <h2 class="mt-3 mt-md-4">My Resume</h2>

            <p className="fs-5">Please see below for an in-depth overview of my skills and experience.</p>

            <p className="fs-5"><span class="align-middle">You can also <IconDownload class="me-1 dev-icon"/><a href="#" data-bs-toggle="modal" data-bs-target="#download-modal">download</a> my resume as a <a href={resumeDoc} download="Scott_Green_Resume">Word document</a> or <a href={resumePDF} download="Scott_Green_Resume">PDF</a>.</span></p>  

            <hr className="col-3 col-md-2 my-4 my-md-5"/>

            <h2>Skills &amp; Experience</h2>

            <h3>Work Related Experience and Transferable Skills</h3>
            
            <ul class="fs-5 list-items-spaced">

                <li>Cooperates with clients and customers to deliver desirable outcomes</li>
                <li>Understands tasks and efficiently completes work in order of priority</li>
                <li>Assists team mates to ensure business continuity</li>
                <li>Exceeds KPI targets and surpasses expectations</li>

            </ul>

            <h3>Technology</h3>

            <ul class="fs-5 list-items-spaced">

                <li>Produces web-based products using HTML, CSS and JavaScript</li>
                <li>Experience with MERN stack <span class="fs-6 muted fst-italic">(MongoDB, Express, React, Node)</span></li>
                <li>Builds desktop applications using Electron and Python</li>
                <li>Quickly grasps new programming languages, software and concepts</li>
                <li>Utilizes several computer applications 

                    <div>                  

                    <span class="fs-6">i.e., Visual Studio Code, Adobe Creative Suite, Digital Audio Workstations and Microsoft Office Suite</span>

                    </div>
                 
                </li>

                <li>Uses version control systems such as Git and Bitbucket</li>

            </ul>

            <h3>Responsbility</h3>

            <ul class="fs-5 list-items-spaced">

                <li>Completes assigned tasks on-time and stays within scope</li>
                <li>Has previously been entrusted with significant responsibilities 

                    <div>             

                        <span class="fs-6">i.e., holding a store key and setting up a department for store trading</span>

                    </div>
                    
                </li>

                <li>Arrives punctually and is always enthusiastic</li>
                <li>Dedicated to continuous learning and professional growth</li>

            </ul>

            <h3>Communication &amp; Interpersonal</h3>

            <ul class="fs-5 list-items-spaced">

                <li>Maintains positive working relationships with colleagues </li>
                <li>Is outgoing, supportive and receptive to new ideas</li>
                <li>Builds positive rapport with clients and strives to ensure repeat business</li>
                <li>Possesses strong verbal and written communication</li>

            </ul>

            <h2>Employment History</h2>

            <ul class="fs-5">

                <li class="fw-semibold">Coles Supermarkets, Buderim</li>
                
                <ul class="list-items-spaced-none">

                    <li>
                        Night-fill
                        <span class="float-end">Aug 2021 &ndash; Current</span>
                    </li>

                    <li>
                        Personal Shopper
                        <span class="float-end">Feb 2021 &ndash; Aug 2021</span>
                    </li>

                </ul>

                <li class="fw-semibold mt-2">Nextra Swan Newsagency, Maroochydore</li>
                
                <ul class="list-items-spaced-none">

                    <li>
                        Shop Attendant
                        <span class="float-end">Jul 2020 &ndash; Feb 2021</span>
                    </li>

                </ul>

                <li class="fw-semibold mt-2">Hertz Australia, Mackay</li>
                
                <ul class="list-items-spaced-none">

                    <li>
                        Customer Vehicle Representative
                        <span class="float-end">Jul 2019 &ndash; Jul 2020</span>
                    </li>

                </ul>

                <li class="fw-semibold mt-2">Allianz Australia Insurance Limited</li>
                
                <ul class="list-items-spaced-none">

                    <li>
                        Customer Service Specialist
                        <span class="float-end">Apr 2016 &ndash; Jun 2019</span>
                    </li>

                </ul>

                <li class="fw-semibold mt-2">Nextra News & Megabooks, Toombul</li>
                
                <ul class="list-items-spaced-none">

                    <li>
                        Shop Attendant
                        <span class="float-end">Jul 2015 &ndash; Apr 2016</span>
                    </li>

                </ul>

            </ul>

            <h2>Achievements &amp; Qualifications</h2>

            <ul class="fs-5 list-items-spaced">

                <li>
                    
                    <span class="fw-semibold">Bachelor of Information and Communications Technology</span>

                    <div>

                        <span class="muted fst-italic me-3">Major in Web and Mobile Development</span> GPA 6.1

                    </div>
                    
                </li>

                <li>Delivered a presentation to 30+ education agents from South Asia on behalf of UniSC</li>

                <li>TAFE Queensland Micro-credentials:

                    <ul class="fs-6 list-items-spaced-none">

                        <li>Digital Literacy Essentials (MCC00013)</li>
                        <li>Cyber Security Essentials (MCC00014)</li>
                        <li>Communication Technologies for Business Success (MCC00015)</li>
                        <li>Digital Data Essentials (MCC00016)</li>
                        <li>Data Security Essentials (MCC00017)</li>
                        <li>Data Analysis Essentials (MCC00018)</li>

                    </ul>            

                </li>        

            </ul>

            <h2>Professional References</h2>

            <p class="fs-5"><span class="align-middle">Please <IconDownload class="me-1"/><a href="#" data-bs-toggle="modal" data-bs-target="#download-modal">download</a> my resume to see my current professional references.</span></p>

        </div>
        
    )

}
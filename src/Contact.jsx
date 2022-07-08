import React from "react";

const Contact = () => {
    return(
        <section className="pt-5 pb-5 bg-white" id="contact">
            <div className="container">
                <h1 className="text-center fs-2 fw-bold about-header pt-4 pb-4">Contact Me</h1>
                <div className="row mx-auto justify-content-center align-items-center flex-column ">
                    <div className="col-lg-6">
                        <div className="card mt-5 mb-5 shadow-sm form-div">
                            <div className="card-body">
                                <form id="forms"
                                action="https://formspree.io/f/mwkyodao"
                                method="POST">
                                    <div className="form-group">
                                    <label className="mb-2 form-font fs-6">Name</label>
                                    <input 
                                    className="form-control mb-3" 
                                    type="name" 
                                    name="name"  
                                    placeholder="Your Name" 
                                    required
                                    />
                                    </div>

                                    <div className="form-group">
                                    <label class="mb-2 form-font fs-6">Email</label>
                                    <input 
                                    className="form-control mb-3" 
                                    type="email" 
                                    name="email"  
                                    placeholder="Your Email Address" 
                                    required
                                    />
                                    </div>

                                    <div className="form-group">
                                    <label class="mb-2 form-font fs-6">Phone Number</label>
                                    <input 
                                    className="form-control mb-3" 
                                    type="tel" 
                                    name="number"  
                                    placeholder="Your Phone Number" 
                                    required
                                    />
                                    </div>
                                    
                                    <div className="text-area">
                                    <textarea placeholder="Your Message" name="Message" cols="120" rows="8" style={{maxWidth: "100%"}} className="contact-us-form-message"></textarea>
                                    </div>

                                    <div className="text-center pt-3">
                                    <button type="submit"  class="btn btn-outline-light3" style={{maxWidth: '100%'}}>Send</button> 
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
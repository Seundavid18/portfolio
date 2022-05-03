import React from "react"
import {AiOutlineDesktop} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {SiSketchup} from 'react-icons/si'
import {MdShoppingBag} from 'react-icons/md'


function Services(){
    const services = [
        {
            icon: <AiOutlineDesktop  size={60} color='#400c7b'/>,
            head: 'Web Design',
            body: 'The styling and layout of pages with content, including text and images using web design tools like Html, Css, Bootstrap and more'

        },

        {
            icon: <BsCodeSlash size={60} color='#400c7b' />,
            head: 'Web Development',
            body: 'The work involved in developing a websites or web application. Building a website from ground-0, writing markups and coding'

        },

        {
            icon: <SiSketchup size={60} color='#400c7b'/>,
            head: 'UI/UX',
            body: 'The aesthetics and design of the interface, flow process or sitemaps for a website, application or other interactive media'

        },

        {
            icon: <MdShoppingBag size={60} color='#400c7b'/>,
            head: 'Ecommerce',
            body: 'The integration of eCommerce platforms, payment gateways, custom products templates and a few more'

        },
    ]
    return(
        <section className="pt-5 pb-5" id="services">
            <div className="container">
            <h1 className="text-center fs-2 fw-bold about-header pt-4 pb-5">Services</h1>
                <div className="row row-cols-lg-4 row-cols-1 gy-4">
                    {services.map((service, serv)  => {
                        return(
                            <div key={serv}  className="col">
                                <div className="card border-0 service-card">
                                    <div className="service-card-overlay">
                                        <div className="text-center pb-4">{service.icon}</div>
                                        <h6 className="text-center fs-4 fw-bold pb-3" style={{color: '#222'}}>{service.head}</h6>
                                        <h6 className="text-center service-font">{service.body}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>       
    )
}

export default Services;
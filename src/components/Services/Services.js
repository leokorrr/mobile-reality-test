import React from 'react'
import Service from '../Service/Service'
import bgImage from '../../images/image1.jpg'

export default function Services() {
    const services = [
        'budowa domów z drewna',
        'budowa brm wjazdowych',
        'wykończenie wnętrz',
        'altany ogrodowe',
        'kamienne elementy architekrury',
        'remonty'
    ]
    return (
        <div className="info-page-element services">
            <img className="services__img" src={bgImage} alt=""/>
            <div className="services__upper-element">
                <ul className="services__list">
                    {services.map((service, index) => (<Service key={index} service={service}/>))}
                </ul> 
            </div>
        </div>
    )
}

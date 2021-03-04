import React from 'react'
import logo from '../../images/logo.jpg'

export default function Tile(props) {
    const { hasBackground, hasImage, hasText, backgroundURL } = props
    return (
        <div className="tile">
            <img  className="tile__img" src={backgroundURL} alt=""/>
           { hasBackground && <div className="tile__upper-element">
              { hasImage && <img className="tile__logo" src={logo} alt="img"/> }
              { hasText && <p className="tile__text">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae nobis repellendus quo 
                tempora, ratione error maiores quaerat consectetur. 
                Maiores totam cupiditate quod facere rem obcaecati d
                olore asperiores nam minus sunt?</p>}
           </div> }
        </div>
    )
}

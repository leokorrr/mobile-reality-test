import React from 'react'

export default function TextPresentationHeader(props) {
    const {headerText, subheaderText} = props
    return (
        <div className="text-presentation-header">
            <h2 className="text-presentation-header__header">{headerText}</h2>            
            <h3 className="text-presentation-header__subheader">{subheaderText}</h3>            
        </div>
    )
}

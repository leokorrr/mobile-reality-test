import React, { useState, useEffect } from 'react'
import TextPresentationHeader from '../TextPresentationHeader/TextPresentationHeader'
import TextPresentationContent from '../TextPresentationContent/TextPresentationContent'
import Button from '../Button/Button.js'

export default function TextPresentation(props) {
    const { viewType } = props
    const [headerContent, setHeaderContent] = useState({header: 'header', subheader: 'subheader'})
    useEffect(() => {
        viewType && 
            (viewType === 'about') ? 
                setHeaderContent({header: 'kilka słow o nas', subheader: 'czyli kim jesteśmy i dokąd zbliżamy'})
                :
                setHeaderContent({header: 'nasza oferta', subheader: 'dowiedz się co możemy tobie zaoferować'})
    }, [])

    return (
        <div className="info-page-element text-presentation">
            <TextPresentationHeader headerText={headerContent.header} subheaderText={headerContent.subheader} />
            <TextPresentationContent />
            <Button />
        </div>
    )
}

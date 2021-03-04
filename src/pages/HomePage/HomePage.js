import React from 'react'
import Tiles from '../../components/Tiles/Tiles'
import Services from '../../components/Services/Services'
import TextPresentation from '../../components/TextPresentention/TextPresentation'

function HomePage() {
    return (
        <div className="page page--home">
            <TextPresentation viewType="about"/>
            <Tiles />
            <Services />
            <TextPresentation viewType="offer"/>
        </div>
    )
}

export default HomePage
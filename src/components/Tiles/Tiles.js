import React from 'react'
import Tile from '../Tile/Tile'
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'

export default function Tiles() {
    const tiles = [
        {
            hasBackground: true,
            hasImage: true,
            hasText: false,
            backgroundURL: image1
        },
        {
            hasBackground: false,
            hasImage: false,
            hasText: false,
            backgroundURL: image2
        },
        {
            hasBackground: false,
            hasImage: false,
            hasText: false,
            backgroundURL: image3
        },
        {
            hasBackground: true,
            hasImage: false,
            hasText: true,
            backgroundURL: image4
        }
    ]
    return (
        <div className="info-page-element tiles">
            {tiles.map(tile => (
                <Tile hasBackground={tile.hasBackground} 
                    hasImage={tile.hasImage} 
                    hasText={tile.hasText}
                    backgroundURL={tile.backgroundURL}
                    />))}
        </div>
    )
}

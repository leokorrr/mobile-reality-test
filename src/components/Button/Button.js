import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Button() {
    const history = useHistory()
    const handleClick = () => {
        history.push('/houses-list')
    }
    return (
        <button className="btn" onClick={handleClick}>Zobacz więcej</button>
    )
}

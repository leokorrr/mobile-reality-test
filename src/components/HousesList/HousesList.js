import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List'
import apiActions from '../../helpers/apiActions'
import HousesListItem from '../HousesListItem/HousesListItem'
import { useHistory } from 'react-router-dom' 

export default function HousesList() {
    const [houses, setHouses] = useState([])
    const history = useHistory()
    const handleClick = () => {
        history.push('/add-house')
    }
    useEffect(() => {
        apiActions
            .getHouses()
            .then(res => setHouses(res.data.results))
            .catch(err => {console.log(err)})
    }, [])
    return (
        <div>
            <button onClick={handleClick}>Add house</button>
            <List component="nav" aria-label="main mailbox folders">
                {houses.map(house => <HousesListItem key={house._id} description={house.description} _id={house._id} />)}
            </List>
        </div>
        
    )
}

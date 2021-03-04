import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import apiActions from '../../helpers/apiActions'

export default function HousesListItem(props) {
    const { description, _id } = props
    const handleDelete = (id) => {
        apiActions
            .deleteHouse(id)
            .then(()=>{
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <ListItem>
            {description ? 
                (<div>description: {description}</div>)
                :
                (<div>no description, used id: {_id}</div>)}
                <button onClick={() => handleDelete(_id)}>X</button>
        </ListItem>
    )
}

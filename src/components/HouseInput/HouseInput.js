import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import apiActions from '../../helpers/apiActions'
import { useHistory } from 'react-router-dom' 

export default function HouseInput() {
    const [description, setDescription] = useState()
    const history = useHistory()
    const handleSubmit = () => {
        apiActions
            .postHouse(description)
            .then(() => {
                history.push('/houses-list')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <TextField id="standard-basic" label="Standard" onChange={e => setDescription(e.target.value)}/>
            <button onClick={handleSubmit}>add</button>
        </div>
    )
}

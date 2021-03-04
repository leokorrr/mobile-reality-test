import axios from "axios"

export default {
    getHouses() {
        return axios.get('http://mobile-reality-backend.sadek.usermd.net/houses/all') 
    },
    postHouse(description) {
        return axios.post('http://mobile-reality-backend.sadek.usermd.net/houses', {
            description: description
        })
    },
    deleteHouse(id) {
        return axios.delete(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`)
    }

}


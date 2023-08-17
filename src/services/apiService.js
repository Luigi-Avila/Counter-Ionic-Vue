import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.spacexdata.com'
})

export default {
    getLaunches() {
        return apiClient.get('v4/launches')
    }
}
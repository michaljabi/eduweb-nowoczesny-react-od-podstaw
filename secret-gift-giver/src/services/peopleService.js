
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

export const peopleService = {
    getPeople() {
       return axiosInstance.get('/people')
    },
    addPerson() {

    }
}

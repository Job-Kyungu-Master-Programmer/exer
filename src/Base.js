import axios from 'axios'

const baseUrl = 'http://localhost:9090/etudiants'

const getAll = () => {
     const request = axios.get(baseUrl)
     return request.then(response => response.data)
}

const update = (id,element) => {
     const request = axios.put(`${baseUrl}/${id}`, element)
     return request.then(response => response.data)
}

const delet = (id,element) => {
     const request = axios.delete(`${baseUrl}/${id}`,element)
     return request.then(response => response.data)
}

const posh = element => {
    const request = axios.post(baseUrl, element)
    return request.then(response => response.data)
}

export default { getAll, update, delet, posh }
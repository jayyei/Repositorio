import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

// instance.defaults.baseURL
instance.defaults.headers.common['Content-type'] = 'application/json'

export default instance
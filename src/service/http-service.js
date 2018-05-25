import axios from 'axios'
// axios.defaults.baseURL = 'https://fr.biqs.cn/'
export default class HttpService {
  url = 'https://fr.biqs.cn/'
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        params: param
      }).then(res => { resolve(res.data) })
        .catch(error => { reject(error) })
    })
  }
  post (url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        params: data
      }).then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })
  }
}

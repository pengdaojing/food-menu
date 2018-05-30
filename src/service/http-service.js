import axios from 'axios'
// axios.defaults.baseURL = 'https://fr.biqs.cn/'
export default class HttpService {
  // url = 'https://fr.biqs.cn/'
  // url = 'http://192.168.43.81:8200/'
  url = ' http://localhost:1337/192.168.1.8:8200/'
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
        data: data
      }).then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })
  }
}

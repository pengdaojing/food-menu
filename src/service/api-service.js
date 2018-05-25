import HttpService from './http-service'

export default {
  http: new HttpService(),
  todayMenu () {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.http.url}api/meta/model/list`)
        .then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })
  },
  getFoods () {
    return new Promise((resolve, reject) => {
      this.http.get('static/foods.json')
        .then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })
  }
}

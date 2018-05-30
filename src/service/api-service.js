import HttpService from './http-service'

export default {
  http: new HttpService(),
  // 今日菜单
  todayMenu () {
    return new Promise((resolve, reject) => {
      // ${this.http.url}dish/dayDatail
      // static/todayMenu.json
      this.http.get(`${this.http.url}dish/dayDatail`)
        .then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })
  },
  // 本周菜品
  getWeekFoods () {
    // ${this.http.url}dish/weekList
    // static/weekMenu.json
    return new Promise((resolve, reject) => {
      this.http.get(`${this.http.url}dish/weekList`)
        .then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })
  },
  // 今日菜品评分
  score (option) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.http.url}dish/evaluation`, option)
        .then(res => { resolve(res.data) })
        .catch(error => { reject(error) })
    })
  },
  // 获取最佳菜品
  bestFoods () {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.http.url}dish/evaluation`)
        .then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })
  },
  // 上传/所有菜品
  getFoods () {
    // static/foods.json
    return new Promise((resolve, reject) => {
      this.http.get(`${this.http.url}dish/allList`)
        .then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })
  },
  // 上传
  uploadFood (option) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.http.url}dish/addWeekDish`, option)
        .then(res => { resolve(res.data) })
        .catch(error => { reject(error) })
    })
  },
  // 推荐餐品
  recommend (option) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.http.url}dish/upload`, option)
        .then(res => { resolve(res.data) })
        .catch(error => { reject(error.data) })
    })
  }
}

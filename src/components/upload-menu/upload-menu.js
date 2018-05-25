import foodHeader from '../food-header/food-header.vue'
import apiService from '../../service/api-service'
export default {
  name: 'upload-menu',
  data () {
    return {
      currentDay: 0,
      currentStore: 0,
      allData: [],
      weeks: [
        {name: '星期一', id: 1, value: '', selected: true},
        {name: '星期二', id: 2, value: '', selected: false},
        {name: '星期三', id: 3, value: '', selected: false},
        {name: '星期四', id: 4, value: '', selected: false},
        {name: '星期五', id: 5, value: '', selected: false}
      ],
      stores: [],
      foods: []
    }
  },
  created () {
    this.getFoods()
  },
  methods: {
    // 获取食物列表
    getFoods () {
      apiService.getFoods()
        .then(res => {
          console.log('all data', res)
          if (res.list) {
            this.allData = res.list
            console.log('all data', this.allData)
            // 初始化店铺和食品
            this.setStore()
          }
        })
    },
    setStore () {
      this.stores = this.allData[this.currentDay]['items']
      this.foods = this.stores[this.currentStore]['items']
      this.stores.forEach(s => {
        s.selected = false
      })
      this.stores[this.currentStore].selected = true
    },
    // 切换周几
    switchWeek (item) {
      this.currentStore = 0
      this.weeks.forEach((day, index) => {
        day.selected = false
        // 将当前点击项设置为高亮
        if (item === day) {
          day.selected = true
          this.currentDay = index
          this.stores = this.allData[this.currentDay]['items']
          this.setStore()
        } else {
          day.selected = false
        }
      })
    },
    switchStore (s) {
      this.stores.forEach((store, index) => {
        store.selected = false
        if (store === s) {
          store.selected = true
          this.currentStore = index
          this.foods = this.stores[this.currentStore]['items']
        } else {
          store.selected = false
        }
      })
    },
    toHome () {
      this.$router.back()
    }
  },
  components: {
    foodHeader
  }
}

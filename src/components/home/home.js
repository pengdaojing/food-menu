import sideRight from '../side-right/side-right.vue'
import ApiService from '../../service/api-service'
import foodHeader from '../food-header/food-header.vue'
export default {
  name: 'home',
  data () {
    return {
      todayMenu: {
        breakfast: '小葱拌豆腐',
        lunch: '红烧肉、狮子头'
      }
    }
  },
  created () {
    this.getTodayMenu()
  },
  components: {
    sideRight,
    foodHeader
  },
  methods: {
    getTodayMenu () {
      ApiService.todayMenu()
        .then(res => {
          console.log('res', res)
        })
    }
  }
}

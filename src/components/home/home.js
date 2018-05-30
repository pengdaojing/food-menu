import sideRight from '../side-right/side-right.vue'
import apiService from '../../service/api-service'
import foodHeader from '../food-header/food-header.vue'
export default {
  name: 'home',
  data () {
    return {
      dialogVisible: false,
      scoreInvalid: false,
      codeInvalid: false,
      todayMenu: {
        breakfast: {
          list: [],
          restaurantId: '',
          restaurantName: ''
        },
        lunch: {
          list: [{model: 0}],
          restaurantId: '',
          restaurantName: ''
        }
      },
      weekMenu: [],
      scoreOpt: {
        code: '',
        detail: [],
        userName: ''
      }
    }
  },
  created () {
    this.getTodayMenu()
    this.getWeekFoods()
  },
  components: {
    sideRight,
    foodHeader
  },
  methods: {
    // 获取今日菜品
    getTodayMenu () {
      apiService.todayMenu()
        .then(res => {
          if (res.code === 0) {
            const data = res.result
            if (data['weekBreakfasts'] && data['weekBreakfasts'][0]) {
              this.todayMenu.breakfast.list = data['weekBreakfasts'][0].dishLists
              this.todayMenu.breakfast.restaurantId = data['weekBreakfasts'][0].restaurantId
              this.todayMenu.breakfast.restaurantName = data['weekBreakfasts'][0].restaurantName
            }
            if (data['weekLunchs'] && data['weekLunchs'][0]) {
              this.todayMenu.lunch.list = data['weekLunchs'][0].dishLists
              this.todayMenu.lunch.restaurantId = data['weekLunchs'][0].restaurantId
              this.todayMenu.lunch.restaurantName = data['weekLunchs'][0].restaurantName
            }
          } else {
            this.$message.warning(res.msg)
          }
        })
    },
    // 获取本周菜品
    getWeekFoods () {
      apiService.getWeekFoods()
        .then(res => {
          if (res.code === 0) {
            const week = ['星期一', '星期二', '星期三', '星期四', '星期五']
            const data = res.result
            week.forEach((d, ind) => {
              this.weekMenu.push({day: week[ind], weekBreakfasts: data.weekBreakfasts[ind] ? data.weekBreakfasts[ind] : [], weekLunchs: data.weekLunchs[ind] ? data.weekLunchs[ind] : []})
            })
          } else {
            this.$message.warning(res.msg)
          }
        })
    },
    // 评分弹窗
    commentFood () {
      this.dialogVisible = true
      this.lunch = {
        list: [{model: 0}],
        restaurantId: '',
        restaurantName: ''
      }
      this.todayMenu.lunch.list.map(f => {
        return Object.assign({model: 0}, f)
      })
    },
    // 提交评分
    submitScore () {
      const scored = []
      this.scoreInvalid = false
      this.todayMenu.lunch.list.forEach(f => {
        if (f.model) {
          scored.push(f)
        }
      })
      // 校验全部打分
      if (scored.length < this.todayMenu.lunch.list.length) {
        this.scoreInvalid = true
        return
      }
      // 检验用户名和标识码
      this.$validator.validateAll().then(res => {
        if (res) {
          const detail = scored.map(s => {
            return {dishId: s.id, evaluation: s.model, restaurantId: this.todayMenu.lunch.restaurantId}
          })
          this.scoreOpt.detail = detail
          // 提交分数
          apiService.score(this.scoreOpt)
            .then(res => {
              if (res.code === 0) {
                this.dialogVisible = false
              } else {
                this.$message.warning(res.msg)
              }
            })
        }
      })
    }
  }
}

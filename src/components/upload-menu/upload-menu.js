import foodHeader from '../food-header/food-header.vue'
import apiService from '../../service/api-service'
export default {
  name: 'upload-menu',
  data () {
    return {
      dialogVisible: false,
      currentDay: 0,
      currentStore: 0,
      currentBreakfastStore: 0,
      weeks: [
        {name: '星期一', id: 1, value: '', selected: true},
        {name: '星期二', id: 2, value: '', selected: false},
        {name: '星期三', id: 3, value: '', selected: false},
        {name: '星期四', id: 4, value: '', selected: false},
        {name: '星期五', id: 5, value: '', selected: false}
      ],
      allData: [],
      breakfastList: [],
      lunchList: [],
      breakfastFoods: [],
      lunchFoods: [],
      selected: [],
      uploadOpt: {
        code: '',
        dishWeekListDtos: [],
        name: ''
      }
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
          if (res.code === 0) {
            // this.breakfastList = this.coppyArray(data.breakfasts)
            // this.lunchList = this.coppyArray(data.lunchs)
            // 早餐和午餐复制到每一天
            for (let i = 0; i < 5; i++) {
              this.allData[i] = {
                breakfastList: JSON.parse(JSON.stringify(res.result.breakfasts)),
                lunchList: JSON.parse(JSON.stringify(res.result.lunchs))
              }
            }
            // 初始化店铺和食品
            this.setBstore()
            this.setLunchStore()
          } else {
            this.$message.warning(res.msg)
          }
        })
    },
    setBstore () {
      this.breakfastList = this.allData[this.currentDay]['breakfastList']
      this.breakfastFoods = this.breakfastList[this.currentBreakfastStore]['dishLists']
      this.breakfastList.forEach(s => {
        s.selected = false
      })
      this.breakfastList[this.currentBreakfastStore].selected = true
    },
    setLunchStore () {
      this.lunchList = this.allData[this.currentDay]['lunchList']
      this.lunchFoods = this.lunchList[this.currentStore]['dishLists']
      this.lunchList.forEach(s => {
        s.selected = false
      })
      this.lunchList[this.currentStore].selected = true
    },
    // 切换周几
    switchWeek (item) {
      this.currentStore = 0
      this.currentBreakfastStore = 0
      this.weeks.forEach((day, index) => {
        day.selected = false
        // 将当前点击项设置为高亮
        if (item === day) {
          day.selected = true
          this.currentDay = index
          // this.breakfastList = this.allData[this.currentDay]['breakfastList']
          // this.lunchList = this.allData[this.currentDay]['lunchList']
          // this.stores = this.allData[this.currentDay]['items']
          this.setBstore()
          this.setLunchStore()
        } else {
          day.selected = false
        }
      })
    },
    switchBstore (s) {
      this.breakfastList.forEach((store, index) => {
        store.selected = false
        if (store === s) {
          store.selected = true
          this.currentBreakfastStore = index
          this.breakfastFoods = store['dishLists']
        } else {
          store.selected = false
        }
      })
    },
    switchLunchStore (s) {
      this.lunchList.forEach((store, index) => {
        store.selected = false
        if (store === s) {
          store.selected = true
          this.currentStore = index
          this.lunchFoods = store['dishLists']
        } else {
          store.selected = false
        }
      })
    },
    changed (e, type, current, ind) {
      const list = this.allData[this.currentDay][type][current]['dishLists']
      const selects = []
      list.forEach(item => {
        if (item.checked) {
          selects.push(item.dishId)
        }
      })
      const newArr = new Set(selects)
      if (newArr.size > 5) {
        list[ind].checked = false
        this.$message.warning('最多选5个')
      }
    },
    // 预览已选菜品
    preview () {
      this.dialogVisible = true
      this.allData.forEach((d, ind) => {
        this.selected[ind] = {}
        // 提取选中的早餐
        if (d && d.breakfastList) {
          const previewB = {
            dishNames: [],
            restaurantName: ''
          }
          d.breakfastList.forEach(s => {
            if (s && s.restaurantId) {
              previewB.restaurantName = s.restaurantName
            }
            if (s && s.dishLists) {
              s.dishLists.forEach(f => {
                if (f.checked) {
                  previewB.dishNames.push(f.dishName)
                }
              })
            }
          })
          this.selected[ind]['breakfastList'] = previewB
        }
        // 提取选中的午餐
        if (d && d.lunchList) {
          const previewL = {
            dishNames: [],
            restaurantName: ''
          }
          d.lunchList.forEach(s => {
            if (s && s.restaurantId) {
              previewL.restaurantName = s.restaurantName
            }
            if (s && s.dishLists) {
              s.dishLists.forEach(f => {
                if (f.checked) {
                  previewL.dishNames.push(f.dishName)
                }
              })
            }
          })
          this.selected[ind]['lunchList'] = previewL
        }
      })
    },
    // 上传菜品
    submitFood () {
      this.$validator.validateAll().then(res => {
        if (res) {
          const opt = []
          this.allData.forEach((d, ind) => {
            opt[ind] = {}
            // 提取选中的早餐
            if (d && d.breakfastList) {
              const breakfast = {
                dishIds: [],
                restaurantId: ''
              }
              d.breakfastList.forEach(s => {
                if (s && s.restaurantId) {
                  breakfast.restaurantId = s.restaurantId
                }
                if (s && s.dishLists) {
                  s.dishLists.forEach(f => {
                    if (f.checked) {
                      breakfast.dishIds.push(f.dishId)
                    }
                  })
                }
              })
              opt[ind]['breakFastDto'] = breakfast
              opt[ind]['week_date'] = ind + 1
            }
            // 提取选中的午餐
            if (d && d.lunchList) {
              const lunch = {
                dishIds: [],
                restaurantId: ''
              }
              d.lunchList.forEach(s => {
                if (s && s.restaurantId) {
                  lunch.restaurantId = s.restaurantId
                }
                if (s && s.dishLists) {
                  s.dishLists.forEach(f => {
                    if (f.checked) {
                      lunch.dishIds.push(f.dishId)
                    }
                  })
                }
              })
              opt[ind]['lunchDto'] = lunch
            }
          })
          this.uploadOpt.dishWeekListDtos = opt
          // 每天早餐午餐必选
          let breakfastLength = 0
          let lunchLength = 0
          this.uploadOpt.dishWeekListDtos.forEach(item => {
            if (item.breakFastDto.dishIds.length) {
              breakfastLength++
            }
            if (item.lunchDto.dishIds.length) {
              lunchLength++
            }
          })
          if (breakfastLength < 5) {
            this.$message.warning('本周早餐不可少')
            return
          }
          if (lunchLength < 5) {
            this.$message.warning('本周午餐不可少')
            return
          }
          // 提交
          apiService.uploadFood(this.uploadOpt)
            .then(res => {
              if (res.code === 0) {
                this.toHome()
                this.$message.success('添加成功')
              } else {
                this.$message.warning(res.msg)
              }
            })
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

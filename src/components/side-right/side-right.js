import apiService from '../../service/api-service.js'
export default {
  name: 'side-right',
  data: function () {
    return {
      bestFood: []
    }
  },
  created () {
    this.getGoodFood()
  },
  methods: {
    getGoodFood () {
      console.log('get get')
      apiService.bestFoods()
        .then(res => {
          if (res.code === 0) {
            this.bestFood = res.result ? res.result : []
          } else {
            this.$message.warning(res.msg)
          }
        })
    }
  }
}

import foodHeader from '../food-header/food-header.vue'
import apiService from '../../service/api-service.js'
export default {
  name: 'recommend',
  data () {
    return {
      recommendOpt: {
        code: '',
        dishName: '',
        dishType: 0,
        name: '',
        price: 0,
        restaurantName: '',
        taste: ''
      }
    }
  },
  methods: {
    toHome () {
      this.$router.back()
    },
    submitForm () {
      this.$validator.validateAll().then(res => {
        if (res) {
          apiService.recommend(this.recommendOpt)
            .then(res => {
              if (res.code === 0) {
                this.$message({message: '推荐成功', type: 'success'})
                this.$router.push({path: 'home'})
              } else {
                this.$message.warning(res.msg)
              }
            })
        }
      })
    }
  },
  components: {
    foodHeader
  }
}

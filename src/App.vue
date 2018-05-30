<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "assets/font/iconfont.css";
  body,h1,h2,h3,h4,h5,h6,div,section,p,ul,ol,li,span,i,a{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-size: 14px;
    color: #333;
    background-color: #fafafa !important;
    font-family: "Microsoft YaHei", Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  }
  select,input,textarea {
    &:focus{
       outline: none;
     }
  }
  ul,ol{
    list-style: none;
  }
  button{
    border: none;
  }
  button:focus{
    outline: none;
  }
  .btn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
  }
  .btn:active{
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
  }
  .container{
    width: 1000px;
    padding: 0 16px;
    margin: 0 auto;
  }
  /*form*/
  form{
    .error-tip{
      color: #e0060c;
      position: absolute;
      left: 0;
      top: 35px;
      font-size: 12px;
    }
  }
  .f-form-group{
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    label{
      font-weight: normal;
      margin-right: 15px;
      display: inline-block;
      width: 5em;
      text-align: right;
    }
    .f-input-group{
      width: 300px;
      input{
        height: 29px;
        line-height: 29px;
        width: 100%;
        background-color: #f5f5f5;
        border-radius: 4px;
        border: none;
        padding: 0 15px;
      }
    }
  }
  .required-icon{
    color: red;
    font-style: normal;
  }
  .f-select-group{
    position: relative;
    width: 155px;
    height: 29px;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    overflow: hidden;
    select{
      border: none;
      width: 100%;
      height: 100%;
      color: #969696;
      padding-left: 12px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      background-color: transparent;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: #fff;
    }
    .iconfont{
      position: absolute;
      right: 0;
      top: 50%;
      color: #169bd5;
      transform: translate(0, -50%);
      font-size: 26px;
      border-left: 1px solid #c9c9c9;
      height: 20px;
      line-height: 20px;
      padding: 0 3px;
    }
  }
  .validate-group{
    position: relative;
  }
</style>

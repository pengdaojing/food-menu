<template>
  <div class="home">
    <food-header></food-header>
    <div class="content">
      <div class="container">
        <div class="left-content">
          <div class="today-menu">
            <div class="backdrop"></div>
            <h1 class="title">今日菜单</h1>
            <div class="menu-content">
              <p><i class="iconfont icon-breakfast"></i>
                <span class="label">早餐：</span>
                <span v-for="(bf, index) in todayMenu.breakfast.list" :key="bf.dishId">{{bf.dishName}}<i v-show="index!=todayMenu.breakfast.list.length-1">、</i>&nbsp;</span>
              </p>
              <p><i class="iconfont icon-lunch"></i>
                <span class="label">午餐：</span>
                <span class="lunch-wrap">
                  <span v-for="(bf, index) in todayMenu.lunch.list" :key="bf.dishId">{{bf.dishName}}<i v-show="index!=todayMenu.lunch.list.length-1">、</i>&nbsp;</span>
                  <span v-show="todayMenu.lunch.restaurantName">（餐厅名称：{{todayMenu.lunch.restaurantName}}）</span>
                  <a class="link" @click="commentFood" v-show="todayMenu.lunch.restaurantName">评价</a>
                </span>
              </p>
            </div>
          </div>
          <div class="week-menu">
            <h1 class="title">
              <span class="text">本周菜单</span>
              <div class="backdrop"></div>
            </h1>
            <div class="menu-list">
              <!--<div class="backdrop"></div>-->
              <ul>
                <li class="menu-item" v-for="d in weekMenu" :key="d.dishId">
                  <h4 class="menu-header">{{d.day}}</h4>
                  <p><i class="iconfont icon-breakfast"></i>
                    <span class="label">早餐：</span>
                    <span v-for="(l, index) in d.weekBreakfasts.dishLists" :key="l.dishId">{{l.dishName}}<i v-show="index!=d.weekBreakfasts.dishLists.length-1">、</i><br></span>
                  </p>
                  <p><i class="iconfont icon-lunch"></i>
                    <span class="label">午餐：</span>
                    <span class="food">
                      <span v-for="(l, index) in d.weekLunchs.dishLists" :key="l.dishId">{{l.dishName}}<i v-show="index!=d.weekLunchs.dishLists.length-1">、</i><br></span>
                      <span class="store-name" v-show="d.weekLunchs.restaurantName">（餐厅名称：{{d.weekLunchs.restaurantName}}）</span>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right-content">
          <side-right></side-right>
        </div>
      </div>
    </div>
    <footer></footer>
    <!--评分弹出层-->
    <el-dialog title="评价菜品" :visible.sync="dialogVisible" :close-on-click-modal="false">
      <div class="star-area">
        <ul class="score-list">
          <li v-for="f in todayMenu.lunch.list" :key="f.dishId">
            <span class="food">{{f.dishName}}</span>
            <el-rate v-model="f.model" :colors="['#fc391d', '#fc391d', '#fc391d']"></el-rate>
          </li>
        </ul>
        <p class="error-tip" v-show="scoreInvalid">请对全部菜品评分</p>
      </div>
      <form>
        <div class="f-form-group">
          <label>用户名称 <i class="required-icon">*</i></label>
          <div class="validate-group">
            <div class="f-input-group">
              <input type="text" name="userName" placeholder="输入用户名称" v-model="scoreOpt.userName" v-validate="'required'">
            </div>
            <span class="error-tip" v-show="errors.has('userName')">请输入用户名称</span>
          </div>
        </div>
        <div class="f-form-group">
          <label>标识码 <i class="required-icon">*</i></label>
          <div class="validate-group">
            <div class="f-input-group">
              <input type="text" name="code" placeholder="输入标识码" v-model="scoreOpt.code" v-validate="'required'">
            </div>
            <span class="error-tip" v-show="errors.has('code')">请输入标识码</span>
          </div>
        </div>
      </form>
      <div class="btn-group">
        <button class="btn" @click="submitScore">提交</button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./home.js"></script>
<style src="./home.less" lang="less" scoped></style>

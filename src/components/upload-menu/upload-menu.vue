<template>
  <div class="upload-menu">
    <food-header></food-header>
    <div class="content">
      <div class="container">
        <h1 class="title">上传菜品</h1>
        <ul class="weeks">
          <li :class="{active: day.selected}"
              v-for="day in weeks"
              :key="day.id"
              @click="switchWeek(day)">{{day.name}}</li>
        </ul>
        <div class="food-area">
          <ul class="stores">
            <li :class="{active: s.selected}"
                v-for="s in stores"
                :key="s.id"
                @click="switchStore(s)">{{s.name}}</li>
          </ul>
          <ul class="foods">
            <li v-for="f in foods" :key="f.id">
              <label class="food-checkbox" :for="'food'+f.id">
                <input type="checkbox" v-model="f.checked" :id="'food'+f.id">
                <i class="iconfont" :class="{'icon-checkbox': f.checked, 'icon-checkbox-empty': !f.checked}"></i>&nbsp;<span :title="f.name">{{f.name}}</span>
              </label>
            </li>
          </ul>
        </div>
        <div class="btn-group">
          <button class="btn">确定</button>
          <button class="btn cancel" @click="toHome">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./upload-menu.js"></script>
<style src="./upload-menu.less" lang="less" scoped></style>

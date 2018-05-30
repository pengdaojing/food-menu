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
        <h4 class="sub-title">选择早餐</h4>
        <div class="food-area">
          <ul class="stores">
            <li :class="{active: s.selected}"
                v-for="s in breakfastList"
                :key="s.restaurantId"
                @click="switchBstore(s)">{{s.restaurantName}}</li>
          </ul>
          <ul class="foods">
            <li v-for="f in breakfastFoods" :key="f.dishId">
              <label class="food-checkbox" :for="'food'+f.dishId">
                <input type="checkbox" v-model="f.checked" :id="'food'+f.dishId">
                <i class="iconfont" :class="{'icon-checkbox': f.checked, 'icon-checkbox-empty': !f.checked}"></i>&nbsp;<span :title="f.dishName">{{f.dishName}}</span>
              </label>
            </li>
          </ul>
        </div>
        <h4 class="sub-title">选择午餐</h4>
        <div class="food-area">
          <ul class="stores">
            <li :class="{active: s.selected}"
                v-for="s in lunchList"
                :key="s.restaurantId"
                @click="switchLunchStore(s)">{{s.restaurantName}}</li>
          </ul>
          <ul class="foods">
            <li v-for="(f, ind) in lunchFoods" :key="f.dishId">
              <label class="food-checkbox" :for="'food'+f.dishId">
                <input type="checkbox" v-model="f.checked" :id="'food'+f.dishId" @change="changed($event, 'lunchList', currentStore, ind)">
                <i class="iconfont" :class="{'icon-checkbox': f.checked, 'icon-checkbox-empty': !f.checked}"></i>&nbsp;<span :title="f.dishName">{{f.dishName}}</span>
              </label>
            </li>
          </ul>
        </div>
        <form>
          <div class="f-form-group relative">
            <label>用户名称 <i class="required-icon">*</i></label>
            <div class="validate-group">
              <div class="f-input-group">
                <input type="text" name="name" placeholder="输入用户名称" v-model="uploadOpt.name" v-validate="'required'">
              </div>
              <span class="error-tip" v-show="errors.has('name')">请输入用户名称</span>
            </div>
            <!--<a class="preview" @click="preview">预览已选菜品</a>-->
          </div>
          <div class="f-form-group">
            <label>标识码 <i class="required-icon">*</i></label>
            <div class="validate-group">
              <div class="f-input-group">
                <input type="text" name="code" placeholder="输入标识码" v-model="uploadOpt.code" v-validate="'required'">
              </div>
              <span class="error-tip" v-show="errors.has('code')">请输入标识码</span>
            </div>
          </div>
        </form>
        <div class="btn-group">
          <button class="btn" @click="submitFood">确定</button>
          <button class="btn cancel" @click="toHome">取消</button>
        </div>
      </div>
    </div>
    <el-dialog title="已选菜品" :visible.sync="dialogVisible" :close-on-click-modal="false">
      <ul>
        <li v-for="w in weeks" :key="w.id">
          <h4>{{w.name}}</h4>
          <!--<div class="menu-content">-->
            <!--<p><i class="iconfont icon-breakfast"></i>-->
              <!--<span class="label">早餐：</span>-->
              <!--<span v-for="(bf, index) in selected[ind].breakfastList" :key="bf.dishId">{{bf.dishName}}<i v-show="index!=selected[ind].breakfastList.length-1">、</i>&nbsp;</span>-->
            <!--</p>-->
            <!--<p><i class="iconfont icon-lunch"></i>-->
              <!--<span class="label">午餐：</span>-->
              <!--<span class="lunch-wrap">-->
                  <!--<span v-for="(bf, index) in selected[ind].lunchList" :key="bf.dishId">{{bf.dishName}}<i v-show="index!=selected[ind].lunchList.length-1">、</i>&nbsp;</span>-->
                  <!--<span>（餐厅名称：{{selected[ind].restaurantName}}）</span>-->
                  <!--<a class="link" @click="commentFood">评价</a>-->
                <!--</span>-->
            <!--</p>-->
          <!--</div>-->
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script src="./upload-menu.js"></script>
<style src="./upload-menu.less" lang="less" scoped></style>

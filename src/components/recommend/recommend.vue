<template>
  <div class="recommend">
    <food-header></food-header>
    <div class="content">
      <div class="container">
        <h1 class="title">推荐菜品</h1>
        <form>
          <div class="f-form-group">
            <label>类型 <i class="required-icon">*</i></label>
            <div class="validate-group">
              <div class="f-select-group">
                <select name="dishType" v-model="recommendOpt.dishType" v-validate="'in:1,2'">
                  <option value='' disabled selected style="display:none;">选择类型</option>
                  <option value="1">早餐</option>
                  <option value="2">午餐</option>
                </select>
                <i class="iconfont icon-triangle-down"></i>
              </div>
              <span class="error-tip" v-show="errors.has('dishType')">请选择类型</span>
            </div>
          </div>
          <div class="f-form-group">
            <label>餐厅名称 <i class="required-icon">*</i></label>
            <div class="validate-group">
              <div class="f-input-group">
                <input type="text" name="restaurantName" placeholder="输入餐厅名称" v-model="recommendOpt.restaurantName" v-validate="'required'">
              </div>
              <span class="error-tip" v-show="errors.has('restaurantName')">请输入餐厅名称</span>
            </div>
          </div>
          <div class="f-form-group">
            <label>菜品名称 <i class="required-icon">*</i></label>
            <div class="validate-group">
              <div class="f-input-group">
                <input type="text" name="dishName" placeholder="输入菜品名称" v-model="recommendOpt.dishName" v-validate="'required'">
              </div>
              <span class="error-tip" v-show="errors.has('dishName')">请输入菜品名称</span>
            </div>
          </div>
          <div class="f-form-group">
            <label>口味</label>
            <div class="f-input-group">
              <input type="text" placeholder="输入菜品口味" v-model="recommendOpt.taste">
            </div>
          </div>
          <div class="f-form-group">
            <label>价格</label>
            <div class="f-input-group">
              <input type="number" placeholder="输入菜品价格" v-model="recommendOpt.price">
            </div>
          </div>
          <div class="f-form-group">
            <label>推荐人 <i class="required-icon">*</i></label>
            <div class="validate-group">
              <div class="f-input-group">
                <input type="text" name="name" placeholder="输入推荐人名称" v-model="recommendOpt.name" v-validate="'required'">
              </div>
              <span class="error-tip" v-show="errors.has('name')">请输入推荐人名称</span>
            </div>
          </div>
          <div class="f-form-group">
            <label>标识码 <i class="required-icon">*</i></label>
            <div class="validate-group">
              <div class="f-input-group">
                <input type="text" name="code" placeholder="输入标识码" v-model="recommendOpt.code" v-validate="'required'">
              </div>
              <span class="error-tip" v-show="errors.has('code')">请输入标识码</span>
            </div>
          </div>
        </form>
        <div class="btn-group">
          <button class="btn" @click="submitForm">确定</button>
          <button class="btn cancel" @click="toHome">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./recommend.js"></script>
<style src="./recommend.less" lang="less" scoped></style>

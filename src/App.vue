<template>
  <div id="app">
    <!-- <h4>基础按钮</h4>
    <div class="row">
      <t-button type="default">default</t-button>
      <t-button type="primary">primary</t-button>
      <t-button type="success">success</t-button>
      <t-button type="info">info</t-button>
      <t-button type="warning">warning</t-button>
      <t-button type="danger">danger</t-button>
    </div>

    <h4>朴素按钮</h4>
    <div class="row">
      <t-button plain type="default">default</t-button>
      <t-button plain type="primary">primary</t-button>
      <t-button plain type="success">success</t-button>
      <t-button plain type="info">info</t-button>
      <t-button plain type="warning">warning</t-button>
      <t-button plain type="danger">danger</t-button>
    </div>

    <h4>带圆角按钮</h4>
    <div class="row">
      <t-button round type="default">default</t-button>
      <t-button round type="primary">primary</t-button>
      <t-button round type="success">success</t-button>
      <t-button round type="info">info</t-button>
      <t-button round type="warning">warning</t-button>
      <t-button round type="danger">danger</t-button>
    </div>
    

    <h4>带图标和文本按钮</h4>
    <div class="row">
      <t-button round icon="t-icon-camera" type="default">相机</t-button>
      <t-button round icon="t-icon-bluetoothon" type="primary">蓝牙</t-button>
      <t-button round icon="t-icon-selection" type="success">成功</t-button>
      <t-button round icon="t-icon-info" type="info">提示</t-button>
    </div>

    <h4>带文本按钮</h4>
    <div class="row">
      <t-button circle type="default">哈</t-button>
      <t-button circle type="primary">哈</t-button>
      <t-button circle type="success">哈</t-button>
      <t-button circle type="info">哈</t-button>
      <t-button circle type="warning">哈</t-button>
      <t-button circle type="danger">哈</t-button>
    </div>

    <h4>带图标按钮</h4>
    <div class="row">
      <t-button circle icon="t-icon-camera" type="default"></t-button>
      <t-button circle icon="t-icon-bluetoothon" type="primary"></t-button>
      <t-button circle icon="t-icon-selection" type="success"></t-button>
      <t-button circle icon="t-icon-info" type="info"></t-button>
      <t-button circle icon="t-icon-cancel" type="warning"></t-button>
      <t-button circle icon="t-icon-delete" type="danger"></t-button>
    </div>

    <h4>禁用按钮</h4>
    <div class="row">
      <t-button disabled type="default" @click="fn">default</t-button>
      <t-button disabled type="primary" @click="fn">primary</t-button>
      <t-button disabled type="success" @click="fn">success</t-button>
      <t-button disabled type="info" @click="fn">info</t-button>
      <t-button disabled type="warning" @click="fn">warning</t-button>
      <t-button disabled type="danger" @click="fn">danger</t-button>
    </div>

    <h4>点击事件按钮</h4>
    <div class="row">
      <t-button type="default" @click="fn">Click Me</t-button>
      <t-button type="success" @click="fn">Click Me</t-button>
      <t-button type="danger" @click="fn">Click Me</t-button>
    </div>-->

    <!-- <t-button @click="visible=true">点击</t-button>
      <t-dialog width="70%" top="120px" :visible.sync="visible">
      <template v-slot:title>
        <h3>我是h3标题</h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <t-button type="default" @click="visible=false">取消</t-button>
        <t-button type="primary" @click="visible=false">确定</t-button>
      </template>
    </t-dialog>-->

    <!-- 
    <t-input placeholder="请输入内容" type="password" name="username"></t-input>
    <t-input type="text" clearable v-model="username" :maxlength="10"></t-input>
    <t-input type="password" showPassword v-model="password"></t-input>-->

    <!-- <t-switch v-model="active"></t-switch>
    <t-switch v-model="active" active-color="#13ce66" inactive-color="#ff4949"></t-switch>-->

    <!-- <t-radio v-model="sex" label="男"></t-radio>
    <t-radio v-model="sex" label="女"></t-radio>-->

    <!-- <t-radio-group v-model="sex">
      <t-radio label="男"></t-radio>
      <t-radio label="女"></t-radio>
    </t-radio-group>

    <t-radio v-model="sex" label="男"></t-radio>
    <t-radio v-model="sex" label="女"></t-radio>-->

    <!-- <t-checkbox v-model="active">是否同意</t-checkbox>
    <t-checkbox-group v-model="hobby">
      <t-checkbox label="吃"></t-checkbox>
      <t-checkbox label="喝"></t-checkbox>
      <t-checkbox label="玩"></t-checkbox>
    </t-checkbox-group>-->

    <t-form :model="form" label-width="80px">
      <t-form-item label="用户名">
        <t-input v-model="form.username" placeholder="请输入用户名"></t-input>
      </t-form-item>
      
      <t-form-item label="密码">
        <t-input v-model="form.password" placeholder="请输入密码"></t-input>
      </t-form-item>

      <t-form-item label="性别">
        <t-radio-group v-model="form.sex">
          <t-radio label="男"></t-radio>
          <t-radio label="女"></t-radio>
        </t-radio-group>
      </t-form-item>

      </t-radio-group>
      <t-form-item label="立即配送">
        <t-switch v-model="form.active"></t-switch>
      </t-form-item>

      <t-form-item label="是否同意">
        <t-checkbox v-model="form.active"></t-checkbox>
      </t-form-item>

      <t-form-item label="选择爱好">
        <t-checkbox-group v-model="form.hobby">
          <t-checkbox label="吃"></t-checkbox>
          <t-checkbox label="喝"></t-checkbox>
          <t-checkbox label="玩"></t-checkbox>
        </t-checkbox-group>

      </t-form-item>
      <t-form-item>
        <t-button type="success">登录</t-button>&nbsp;
        <t-button type="danger">注册</t-button>
      </t-form-item>
    </t-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      username: "root",
      password: "",
      active: false,
      sex: "male",
      hobby: [],
      form: {
        username: "",
        password: "",
        active: true,
        hobby: [],
        sex: ""
      }
    };
  },
  methods: {
    fn() {
      console.log("123");
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 300px;
  margin: 20px;
}
.row {
  margin-bottom: 20px;
  button.t-button {
    margin-right: 10px;
  }
}
</style>

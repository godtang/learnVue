<template>
  <div class="middle-box text-center loginscreen animated fadeInDown">
    <form @submit.prevent="onSubmit" id="editForm">
      <div class="form-group">
        <input type="password" v-model="oldPassword" class="form-control" placeholder="请输入旧密码" required>
      </div>
      <div class="form-group">
        <input type="password" v-model="newPassword" class="form-control" placeholder="请输入新密码" required>
      </div>
      <div class="form-group">
        <input type="password" v-model="rnewPassword" class="form-control" placeholder="请确认新密码" required>
      </div>
      <button type="submit" class="btn btn-primary block full-width m-b">修改</button>
      <p class="text-muted text-center">
        <span v-if="oldPassword.length === 0" class="text-danger">旧密码不能为空</span>
        <span v-if="newPassword.length === 0" class="text-danger">新密码不能为空</span>
        <span v-if="rnewPassword.length === 0" class="text-danger">确认新密码不能为空</span>
      </p>
    </form>
  </div>
</template>  
  
<script>
export default {
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      rnewPassword: ''
    };
  },
  methods: {
    onSubmit() {
      // 在此处处理表单提交逻辑，例如通过Ajax请求将数据发送到服务器。  
    }
  }
};  
</script>
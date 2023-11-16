<script >

</script>

<template>
  <div>
    <div class="middle-box text-center loginscreen  animated fadeInDown">
      <div>
        <div style="padding-top: 180px;">
          <img src="src/static/Content/css/Images/logo.png" />
        </div>
        <h3>欢迎使用国内培训后台管理系统</h3>
        <form class="m-t" role="form" method="post" id="frmxx" action="/Account/Login">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="请输入LDAP账号用户名" required="" id="UserName" name="UserName"
              value="">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="请输入LDAP账号密码" required="" id="Password"
              name="Password">
          </div>
          <button type="submit" class="btn btn-primary block full-width m-b">登 录</button>
          <span class="text-danger field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
          <span class="text-danger field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
          <span class="text-danger field-validation-valid" data-valmsg-for="VerifyCode" data-valmsg-replace="true"></span>
      </form>
    </div>
    </div>
  <!-- <div class="footer">
                    <a href="https://t-global-academy-admin.laiye.com">海外培训中心</a>
                            </div> -->
    <!-- <div v-for="item in items" :key="item.id" class="footer">
                        <a v-for="item in items" href="item.url">{{ item.name }}</a>
                      </div> -->
    <div v-if="items.length > 0" class="footer">
      <a v-for="item in items" :key="item.url" :href="item.url">{{ item.name }}</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    // 发起POST请求
    fetch('http://127.0.0.1:18080/api/backstageFriendLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ /* 请求体数据 */ })
    })
      .then(response => response.json())
      .then(data => {
        // 将返回的数据保存到组件的数据中
        this.items = data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>
<style scoped>
.footer {
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
  font-size: 30px;
}
</style>

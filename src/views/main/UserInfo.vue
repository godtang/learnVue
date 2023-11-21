
<template>
  <!-- 登录信息Begin-->
  <li class="nav-header">
    <div class="dropdown profile-element">
      <span>
        <img alt="" class="img-circle" src="../../static/Content/HplusImage/profile_small.png"
          style="height: 64px;width: 64px;" />
        <a class="img-circle btn btn-primary " href="javascript:$('#collapsemenu').click();"
          style="float: right;margin-top:-25px; margin-right:-5px; width: 40px; height: 40px; font-family: cursive; font-weight: bold; padding-top: 9px;">
          &lt;&lt; </a>
      </span>
      <a data-toggle="dropdown" class="dropdown-toggle" href="#">
        <span class="clear">
          <span class="block m-t-xs"><strong class="font-bold">{{ username }}</strong></span>
          <span class="text-muted text-xs block">{{ rolename }}<b class="caret"></b></span>
        </span>
      </a>
      <ul class="dropdown-menu animated fadeInRight m-t-xs">
        <li>
          <!-- <a class="J_menuItem" href="@Url.Action(" UpdatePwd","SystemUser")" id="linkUpdatePwd">修改密码</a> -->
        </li>
        <li>
          <a href="/login">安全退出</a>
        </li>
      </ul>
    </div>
    <div class="logo-element" title="展开菜单" onclick="javascript:$('#collapsemenu').click();">
      >>
    </div>
  </li>
  <!-- 登录信息End-->
</template>

<script>
import Cookies from 'js-cookie';
export default {
  name: 'UserInfo',
  data() {
    return {
      username: JSON.parse(Cookies.get('UserInfo'))['username'],
      rolename: JSON.parse(Cookies.get('UserInfo'))['roleName'],
    };
  },
  methods: {
    quit() {
      Cookies.remove('Authorization');
      Cookies.remove('UserInfo');
    }
  }
};
</script>
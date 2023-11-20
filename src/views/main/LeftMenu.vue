
<template>
  <div v-html="leftMenu"></div>
</template>

<script>
import Cookies from 'js-cookie';
import store from '../../store';
export default {
  name: 'LeftMenu',
  data() {
    return {
      leftMenu: ''  // 用于存储通过 POST 返回的 HTML 数据
    };
  },
  created() {
    //const store = useStore();
    // 通过 this.$route.params 获取传递的数据
    console.log('LeftMenu:' + store.state.user['id']);
    // 发起 POST 请求
    fetch('http://127.0.0.1:18080/api/usermenu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${Cookies.get('Authorization')}`
      },
      body: JSON.stringify({ "id": JSON.parse(Cookies.get('UserInfo'))['id'] })
    })
      .then(response => response.json())
      .then(data => {
        // 将返回的数据保存到组件的数据中
        console.log(data);
        if (data.code == 0) {
          this.leftMenu = data.data;
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>
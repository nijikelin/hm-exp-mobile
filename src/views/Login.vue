<template>
  <div class="login-page">
    <!-- 导航 -->
    <van-nav-bar title="登录"/>
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
    <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">登录</van-button>
    </div>
    </van-form>

    <router-link class="link" to="/register">注册</router-link>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { setToken } from '@/utils/storage'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const { data } = await login(values)
      setToken(data.data.token)
      this.$toast('登录成功')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.link {
    color: skyblue;
    font-size: 12px;
    padding-right: 20px;
    float:right
}
</style>

<template>
  <div class="register-page">
    <!-- 导航 -->
    <van-nav-bar title="注册" />
    <!-- 注册表单 -->
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
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>

    <router-link class="link" to="/login">登录</router-link>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // const res = register(values)
      // console.log(res)
      this.$toast.loading({
        message: '加载中'
      })
      try {
        const res = await register(values)
        this.$toast.success('注册成功')
        console.log(res)
        this.$router.push('/login')
      } catch (error) {
        // this.$toast.fail('注册失败')
      }
    }
  }
}
</script>

<style>
.link {
  color: skyblue;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>

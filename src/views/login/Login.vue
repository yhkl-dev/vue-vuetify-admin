<template>
  <v-container class="fill-height" fluid >
    <v-row align="center" justify="center" >
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat>
            <v-toolbar-title>Welcome</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                label="请输入用户名"
                name="login"
                :rules="nameRules"
                v-model="username"
                required
                prepend-icon="person"
                type="text">
              </v-text-field>
              <v-text-field
                id="password"
                label="请输入密码"
                v-model="password"
                :rules="passwordRules"
                name="password"
                required
                prepend-icon="lock"
                @keyup.enter.native="loginClick"
                type="password">
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="loginClick"
              :loading="loading"
              color="primary"
              class="ma-2 white--text"
              >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data () {
    return {
      valid: false,
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      username: '',
      nameRules: [
        value => !!value || '用户名不能为空',
        value => isvalidUsername(value) || '请输入正确的用户名'
      ],
      password: '',
      passwordRules: [
        value => value.length >= 5 || '密码不能小于5位'
      ]
    }
  },
  methods: {
    loginClick () {
      this.loading = true
      this.loginForm.username = this.username
      this.loginForm.password = this.password
      this.$store.dispatch('Login', this.loginForm).then(() => {
        this.loading = false
        this.$router.push({ path: '/' })
      }).catch(() => {
        console.log('s')
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
</style>

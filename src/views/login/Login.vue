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
                label="Login"
                name="login"
                v-model="username"
                required
                prepend-icon="person"
                type="text">
              </v-text-field>
              <v-text-field
                id="password"
                label="Password"
                v-model="password"
                name="password"
                required
                prepend-icon="lock"
                type="password">
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="loginClick">Login</v-btn>
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
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      valid: false,
      username: '',
      password: '',
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    loginClick () {
      this.loginForm.username = this.username
      this.loginForm.password = this.password
      this.$store.dispatch('Login', this.loginForm).then(() => {
        this.$router.push({ path: '/' })
      }).catch(() => {
        //
      })
    }
  }
}
</script>

<style scoped>

</style>

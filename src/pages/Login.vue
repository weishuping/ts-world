<template>
  <div class="home">
        登录页面
        <el-button @click="goHome">去首页</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    goHome(): void{
        this.$router.push({path: 'home'})
    }
}
</script>

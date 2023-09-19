<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// import Home from './views/Home.vue'

</script>

<template>
  <!-- 使用中文简体作为当前语言环境 -->
  <el-config-provider :locale="zhCn">
      <router-view />
  </el-config-provider>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app,
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

</style>

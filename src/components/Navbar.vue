<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const activeIndex = ref('4')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const input = ref('')

</script>

<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo clear-border nav" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <el-menu-item index="1">
        <RouterLink to="/">首页</RouterLink>
      </el-menu-item>
      <!-- <el-menu-item index="2">Isnfo</el-menu-item> -->
      <el-input v-model="input" placeholder="Search" class="search-input" :prefix-icon="Search" />
      <!-- <el-menu-item index="3">Orders</el-menu-item> -->
      <!-- <el-sub-menu index="4" >
        <template #title>Workspace</template>
        <el-menu-item index="4-1">item one</el-menu-item>
        <el-menu-item index="4-2">item two</el-menu-item>
        <el-menu-item index="4-3">item three</el-menu-item>
        <el-sub-menu index="4-4">
          <template #title>item four</template>
          <el-menu-item index="4-4-1">item one</el-menu-item>
          <el-menu-item index="4-4-2">item two</el-menu-item>
          <el-menu-item index="4-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->

      <div class="flex-grow" />

      <!-- <el-menu-item index="5">icon1</el-menu-item>
      <el-menu-item index="6">icon2</el-menu-item> -->
      <el-menu-item index="7">
        登录
      </el-menu-item>

    </el-menu>

    <div class="topic">
      <div class="words">
        <h1>学生综合素养个体活动视频标注平台</h1>
        <p>Welcome</p>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.search-input {
  width: 300px;
  height: 50px;
  padding-top: 10px;
}

.flex-grow {
  flex-grow: 1;
}

.nav {
  background-image: url('/src/assets/picture/22.png');
  background-size: 100% 115%;

  .el-menu {
    background: rgb(70, 103, 126);

    .el-menu-item {
      color: white;
    }
  }

  .topic {
    height: 500px;

    .words {
      text-align: center;

      h1 {
        opacity: 1;
        color: white;
        font-weight: 1000;
        font-size: 80px;
        font-family: 'Times New Roman', Times, serif;
        padding-top: 170px;
      }

      p {
        font-weight: 1000;
        color: white;
        font-size: 50px;
        font-family: 'Times New Roman', Times, serif;
        padding-top: 40px;
      }
    }
  }
}

.clear-border {
  border: none;
}
</style>
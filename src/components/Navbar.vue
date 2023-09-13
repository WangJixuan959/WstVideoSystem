<script lang="ts" setup>
import { ref } from "vue"

const activeIndex = ref('4')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const input = ref('')

</script>

<template>
    <div class="nav">
        <el-menu
      :default-active="activeIndex"
      class="el-menu-demo clear-border nav"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <!-- <el-menu-item index="2">Info</el-menu-item> -->
      <el-input v-model="input" placeholder="Search" class="search-input" />
      <el-menu-item index="3">Orders</el-menu-item>
      <el-sub-menu index="4">
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
      </el-sub-menu>
        
      <div class="flex-grow" />
      
      <el-menu-item index="5">icon1</el-menu-item>  
      <el-menu-item index="6">icon2</el-menu-item>
      <el-menu-item index="7">Sign In</el-menu-item>
    </el-menu>

    <h1>WST</h1>
    <p>测试文字</p>

    </div>
    
  </template>


<style lang="scss" scoped>
.search-input {
  width: 300px;
  height: 50px;
  padding-top: 5px;
}

.flex-grow {
    flex-grow: 1;
}

.nav {
    background: white;    // TODO：渐变色
}

.clear-border {
    border: none;
}

h1 {
    text-align: center;
    font-style: italic;
    font-weight: 1000;
    font-size: 70px;
    font-family: 'Times New Roman', Times, serif;
    padding-top: 20px;
}

p {
    text-align: center;
    font-style: italic;
    font-weight: 1000;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    padding-top: 10px;
}

</style>
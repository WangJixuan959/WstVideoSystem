<template>
    <div class="contain">
        <Navbar />
        <SceneItem />
    </div>
    
</template>

<script setup>
import SceneItem from '../components/SceneItem.vue';
</script>

<style lang="scss" scoped>
.contain{
    background-color:#324157;
}

h1, p {
  text-align: center;
  // font-style: italic;
  font-weight: 1000;
  font-family: 'Times New Roman', Times, serif;
  color: white;
}

h1 {
  font-size: 70px;
  padding-top: 20px;
}

p {
  font-size: 30px;
  padding-top: 10px;
}
</style>